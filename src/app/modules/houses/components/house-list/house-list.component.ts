import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItem, HouseListInfo } from '../../../../shared/interfaces';
import { HouseTableComponent } from '../house-table';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, HouseTableComponent],
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseListComponent implements OnInit, OnChanges {
  @Input() housesModel: AccordionItem;
  @Input() houseList: HouseListInfo[];
  @Input() filter: FormGroup;
  @Input() isLogin: boolean;

  @Output() editHouse = new EventEmitter<HouseListInfo>();

  houseData: HouseListInfo[];
  houseDataFilter: HouseListInfo[];

  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    // this.houseDataFilter = this.houseData;
    this.filter.valueChanges.subscribe((value) => {
      this.houseDataFilter = this.houseData?.filter((house) => {
        const { blockNumber, landNumber, minPrice, maxPrice } = value;
        let filter = true;
        if (blockNumber) {
          filter = filter && house.block_number === blockNumber;
        }

        if (landNumber) {
          filter = filter && house.land_number === landNumber;
        }

        if (minPrice) {
          filter = filter && house.price >= Number(minPrice);
        }

        if (maxPrice) {
          filter = filter && house.price <= Number(maxPrice);
        }

        return filter;
      });

      this.cdr.detectChanges();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['housesModel'] &&
      changes['housesModel'].previousValue !==
        changes['housesModel']?.currentValue &&
      changes['houseList'] &&
      changes['houseList'].previousValue !== changes['houseList']?.currentValue
    ) {
      this.houseData = this.houseList?.filter(
        (house) => house.model === this.housesModel?.content?.model
      );
      this.houseDataFilter = this.houseData;
      this.cdr.detectChanges();
    }
  }
}

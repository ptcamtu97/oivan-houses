import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccordionItem,
  HeaderTable,
  HouseListInfo,
} from '../../../../shared/interfaces';
import { HouseTableComponent } from '../house-table';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, HouseTableComponent],
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss'],
})
export class HouseListComponent implements OnInit, OnChanges {
  @Input() housesModel: AccordionItem;
  @Input() houseList: HouseListInfo[];
  @Input() filter: FormGroup;

  @Output() editHouse = new EventEmitter<HouseListInfo>();

  headersTable: HeaderTable[] = [
    {
      sortName: 'houseNumber',
      header: 'House Number',
    },
    {
      sortName: 'blockNo',
      header: 'Block No',
    },
    {
      sortName: 'landNo',
      header: 'Land No',
    },
    {
      sortName: 'price',
      header: 'Price',
    },
    {
      sortName: 'status',
      header: 'Status',
    },
    {
      sortName: 'action',
      header: 'Action',
    },
  ];
  houseData: HouseListInfo[];
  houseDataFilter: HouseListInfo[];

  ngOnInit(): void {
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
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['housesModel'] &&
      changes['housesModel'].previousValue !==
        changes['housesModel']?.currentValue &&
      changes['houseList'] &&
      changes['houseList'].previousValue !==
        changes['houseList']?.currentValue &&
      changes['filter'] &&
      changes['filter'].previousValue !== changes['filter']?.currentValue
    ) {
      this.houseData = this.houseList?.filter(
        (house) => house.model === this.housesModel?.content?.model
      );
      this.houseDataFilter = this.houseData;
    }
  }
}

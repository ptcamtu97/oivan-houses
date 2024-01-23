import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from '../../../../shared';
import { HouseListInfo } from '../../../../shared/interfaces';

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownComponent],
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss'],
})
export class HouseDetailComponent {
  @Input() set data(value: HouseListInfo) {
    if (value) {
      this.houseDetail = value;
      this.form?.patchValue({
        houseNumber: value.house_number,
        blockNumber: value.block_number,
        landNumber: value.land_number,
        houseType: value.house_type,
        houseModel: value.model,
        price: value.price,
        status: value.status,
      });
    }
  }
  @Input() form: FormGroup;
  @Input() status: string[];

  @Input() houseTypes: string[];
  @Input() houseModels: string[];

  @Output() changeValue = new EventEmitter<{
    value: string;
    nameControl: string;
  }>();
  @Output() updateHouse = new EventEmitter<HouseListInfo>();
  @Output() createHouse = new EventEmitter<HouseListInfo>();

  houseDetail: HouseListInfo = {} as HouseListInfo;
}

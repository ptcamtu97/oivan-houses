import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccordionComponent, DropdownComponent } from '../../../../shared';
import { HouseListComponent } from '../house-list';
import { AccordionItem, HouseListInfo } from '../../../../shared/interfaces';

@Component({
  selector: 'app-house-model',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownComponent,
    AccordionComponent,
    HouseListComponent,
  ],
  templateUrl: './house-model.component.html',
  styleUrls: ['./house-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseModelComponent {
  @Input() filterForm: FormGroup;
  @Input() blockNumbers: string[];
  @Input() landNumbers: string[];
  @Input() prices: string[];
  @Input() accordions: AccordionItem[] = [];
  @Input() houseList: HouseListInfo[];
  @Input() isCreate: boolean;

  @Output() changeFilter = new EventEmitter<{
    value: string;
    nameControl: string;
  }>();
  @Output() editHouse = new EventEmitter<HouseListInfo>();
  @Output() createHouse = new EventEmitter<void>();
}

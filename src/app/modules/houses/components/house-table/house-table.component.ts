import {
  Component,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableHeader } from '../../../../shared/directives';
import { compare } from '../../../../shared/constants';
import { HouseListInfo, SortEvent } from '../../../../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-table',
  standalone: true,
  imports: [CommonModule, SortableHeader],
  templateUrl: './house-table.component.html',
  styleUrls: ['./house-table.component.scss'],
})
export class HouseTableComponent {
  @Input() set data(value: HouseListInfo[]) {
    this.itemsOrigin = value;
    this.itemsList = value;
  }

  @Output() editHouse = new EventEmitter<HouseListInfo>();

  @ViewChildren(SortableHeader) headers: QueryList<SortableHeader>;

  router = inject(Router);

  itemsOrigin: HouseListInfo[];
  itemsList: HouseListInfo[];

  onSort({ column, direction }: SortEvent): void {
    // resetting other headers
    for (const header of this.headers) {
      if (header.sortable !== column) {
        header.direction = '';
      }
    }

    // sorting countries
    if (direction === '' || column === '') {
      this.itemsList = this.itemsOrigin;
    } else {
      this.itemsList = [...(this.itemsOrigin as any)].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}

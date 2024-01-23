import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { SortDirection, SortEvent } from '../interfaces';
import { rotate } from '../constants';

@Directive({
  selector: 'th[sortable]',
  standalone: true,
})
export class SortableHeader {
  @Input() sortable = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  @HostBinding('class.asc') get isAsc() {
    return this.direction === 'asc';
  }

  @HostBinding('class.desc') get isDesc() {
    return this.direction === 'desc';
  }

  @HostListener('click') rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

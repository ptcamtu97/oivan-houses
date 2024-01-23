import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() title: string;
  @Input() items: string[] = [];
  @Input() value: string;
  @Input() minWidthDropdown = '7rem';

  @Output() changeItem = new EventEmitter();
}

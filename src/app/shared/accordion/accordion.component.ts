import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionItem, HouseModelInfo } from '../interfaces';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() accordions: any[];
  @Input() customTemplate: TemplateRef<any>;
  @Input() isCollapsed = true;
}

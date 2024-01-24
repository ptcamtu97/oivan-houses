import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../../shared';

@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BreadcrumbComponent],
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent {}

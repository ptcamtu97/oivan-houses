import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HouseModelComponent } from '../../components';
import { Store } from '@ngrx/store';
import { HousesFace, LoginFace } from '../../../../store/fades';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HouseListInfo } from '../../../../shared/interfaces';

@Component({
  selector: 'app-house-model-container',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HouseModelComponent,
  ],
  templateUrl: './house-model-container.component.html',
  styleUrls: ['./house-model-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseModelContainerComponent implements OnInit {
  router = inject(Router);
  store = inject(Store);

  housesFace = inject(HousesFace);
  loginFace = inject(LoginFace);

  filterForm = new FormGroup({
    blockNumber: new FormControl(),
    landNumber: new FormControl(),
    minPrice: new FormControl(),
    maxPrice: new FormControl(),
  });

  ngOnInit(): void {
    this.housesFace.getHouseModelList();
    this.housesFace.getHouseList();
  }

  changeFilter(event: { value: string; nameControl: string }): void {
    this.filterForm.patchValue({
      [event.nameControl]: event.value,
    });
  }

  editHouse(house: HouseListInfo): void {
    this.router.navigateByUrl(`/houses/${house.id}`);
  }

  createHouse(): void {
    this.router.navigateByUrl(`/houses/create-house`);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HouseDetailComponent } from '../../components';
import { HousesFace } from '../../../../store/fades';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { HouseListInfo } from '../../../../shared/interfaces';

@Component({
  selector: 'app-house-detail-container',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HouseDetailComponent],
  templateUrl: './house-detail-container.component.html',
  styleUrls: ['./house-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseDetailContainerComponent implements OnInit {
  housesFace = inject(HousesFace);
  activatedRoute = inject(ActivatedRoute);

  form = new FormGroup({
    houseNumber: new FormControl(),
    blockNumber: new FormControl(),
    landNumber: new FormControl(),
    houseType: new FormControl(),
    houseModel: new FormControl(),
    price: new FormControl(),
    status: new FormControl(),
  });

  status = ['Available', 'Booked'];

  houseTypes = ['Townhouse', 'Villa'];

  houseData$: Observable<HouseListInfo>;

  ngOnInit(): void {
    this.housesFace.getHouseModelList();
    this.housesFace.getHouseList();

    this.activatedRoute.params
      .pipe(filter((params) => !!params))
      .subscribe((params) => {
        this.houseData$ = this.housesFace.getHouseById(params['id']);
      });
  }

  changeValue(event: { value: string; nameControl: string }): void {
    this.form.patchValue({
      [event.nameControl]: event.value,
    });
  }

  createHouse(event: HouseListInfo) {
    this.housesFace.createHouse(event);
  }

  updateHouse(event: HouseListInfo) {
    this.housesFace.updateHouse(event);
  }
}

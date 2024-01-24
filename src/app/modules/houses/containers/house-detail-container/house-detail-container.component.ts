import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
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
    houseNumber: new FormControl('', this.inHouseListValidator()),
    blockNumber: new FormControl(),
    landNumber: new FormControl(),
    houseType: new FormControl(),
    houseModel: new FormControl(),
    price: new FormControl(),
    status: new FormControl(),
    type: new FormControl(),
    id: new FormControl(),
  });

  status = ['Available', 'Booked'];

  houseTypes = ['Townhouse', 'Villa'];

  houseData$: Observable<HouseListInfo>;
  houseNumbers: string[];

  ngOnInit(): void {
    this.housesFace.getHouseModelList();
    this.housesFace.getHouseList();

    this.housesFace.houseNumbers$
      .pipe(filter((value) => !!value))
      .subscribe((value) => (this.houseNumbers = value));

    this.activatedRoute.params
      .pipe(filter((params) => !!params['id']))
      .subscribe((params) => {
        this.form?.controls.houseNumber.setValidators(null);
        this.form?.controls.houseNumber.updateValueAndValidity();
        this.houseData$ = this.housesFace.getHouseById(params['id']);
      });
  }

  changeValue(event: { value: string; nameControl: string }): void {
    this.form.patchValue({
      [event.nameControl]: event.value,
    });
  }

  createHouse() {
    if (this.form.valid) {
      this.housesFace.createHouse(this.form.value as any);
    }
  }

  updateHouse() {
    this.housesFace.updateHouse(this.form.value as any);
  }

  inHouseListValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const { value } = control;
      if (
        !this.houseNumbers ||
        !this.houseNumbers?.find((item) => item === value)
      ) {
        return null; // Valid
      } else {
        return { invalidHouseNumber: true }; // Invalid
      }
    };
  }
}

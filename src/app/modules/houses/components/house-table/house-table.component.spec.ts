import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseTableComponent } from './house-table.component';

describe('HouseTableComponent', () => {
  let component: HouseTableComponent;
  let fixture: ComponentFixture<HouseTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HouseTableComponent],
    });
    fixture = TestBed.createComponent(HouseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

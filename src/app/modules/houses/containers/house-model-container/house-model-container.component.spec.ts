import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseModelContainerComponent } from './house-model-container.component';

describe('HouseModelContainerComponent', () => {
  let component: HouseModelContainerComponent;
  let fixture: ComponentFixture<HouseModelContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HouseModelContainerComponent]
    });
    fixture = TestBed.createComponent(HouseModelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

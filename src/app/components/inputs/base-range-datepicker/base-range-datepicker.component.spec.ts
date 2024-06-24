import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRangeDatepickerComponent } from './base-range-datepicker.component';

describe('BaseRangeDatepickerComponent', () => {
  let component: BaseRangeDatepickerComponent;
  let fixture: ComponentFixture<BaseRangeDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseRangeDatepickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseRangeDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

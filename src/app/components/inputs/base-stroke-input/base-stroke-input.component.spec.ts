import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStrokeInputComponent } from './base-stroke-input.component';

describe('BaseStrokeInputComponent', () => {
  let component: BaseStrokeInputComponent;
  let fixture: ComponentFixture<BaseStrokeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseStrokeInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseStrokeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

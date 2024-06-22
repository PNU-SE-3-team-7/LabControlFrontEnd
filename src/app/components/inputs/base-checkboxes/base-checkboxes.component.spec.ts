import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCheckboxesComponent } from './base-checkboxes.component';

describe('BaseCheckboxesComponent', () => {
  let component: BaseCheckboxesComponent;
  let fixture: ComponentFixture<BaseCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseCheckboxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

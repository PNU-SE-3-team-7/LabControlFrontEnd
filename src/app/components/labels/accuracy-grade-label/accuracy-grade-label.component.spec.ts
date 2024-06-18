import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuracyGradeLabelComponent } from './accuracy-grade-label.component';

describe('AccuracyGradeLabelComponent', () => {
  let component: AccuracyGradeLabelComponent;
  let fixture: ComponentFixture<AccuracyGradeLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccuracyGradeLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccuracyGradeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

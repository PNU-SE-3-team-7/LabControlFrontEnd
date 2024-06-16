import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssigmentComponent } from './course-assigment.component';

describe('CourseAssigmentComponent', () => {
  let component: CourseAssigmentComponent;
  let fixture: ComponentFixture<CourseAssigmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAssigmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAssigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

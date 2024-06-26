import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssignmentComponent } from './course-assignment.component';

describe('CourseMainComponent', () => {
  let component: CourseAssignmentComponent;
  let fixture: ComponentFixture<CourseAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseAssignmentEditComponent} from './course-assignment-edit.component';

describe('CourseAssignmentEditComponent', () => {
  let component: CourseAssignmentEditComponent;
  let fixture: ComponentFixture<CourseAssignmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAssignmentEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CourseAssignmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

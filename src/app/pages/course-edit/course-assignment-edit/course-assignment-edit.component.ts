import {Component, OnInit} from '@angular/core';
import {ICourseButtonsVisibility, ICourseChildEvents} from "../../course/course.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-assignment-edit',
  templateUrl: './course-assignment-edit.component.html',
  styleUrl: './course-assignment-edit.component.scss'
})
export class CourseAssignmentEditComponent implements ICourseChildEvents, OnInit {
  private courseId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap.subscribe(params => {
      this.courseId = params.get('courseId') || '';
    });
  }

  getButtonsVisibility(): ICourseButtonsVisibility {
    return {
      createButtonVisible: false,
      saveButtonVisible: true
    }
  }

  onSaveButtonClicked(): void {
    console.log("save" + this.courseId);
  }
}

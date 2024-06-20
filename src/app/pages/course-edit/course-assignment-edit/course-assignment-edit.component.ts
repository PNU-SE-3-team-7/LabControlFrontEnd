import {Component} from '@angular/core';
import {ICourseButtonsVisibility, ICourseChildEvents} from "../../course/course.component";

@Component({
  selector: 'app-course-assignment-edit',
  templateUrl: './course-assignment-edit.component.html',
  styleUrl: './course-assignment-edit.component.scss'
})
export class CourseAssignmentEditComponent implements ICourseChildEvents {
  getButtonsVisibility(): ICourseButtonsVisibility {
    return {
      createCourseVisible: false, saveCourseVisible: false

    }
  }

  onSaveButtonClicked(): void {
  }
}

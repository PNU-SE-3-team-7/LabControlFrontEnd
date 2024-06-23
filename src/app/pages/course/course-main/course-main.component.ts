import {Component, OnInit} from '@angular/core';
import {ICourse} from "../../../models/ICourse";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {IAssignment} from "../../../models/IAssignment";
import {ASSIGNMENT_TYPE_LABEL_INFO} from "../../../components/labels/assignment-type-states";
import {CourseChildEventType, ICourseButtonDetails, ICourseChildEvents} from "../course.component";
import {CourseService} from "../../../services/api/course.service";
import {ICourseUserPreviewDto, MemberType, UserRole} from "../../../models/IUser";
import {UserService} from "../../../services/api/user-service";
import {AssignmentService} from "../../../services/api/assignment-service";
import {MatSnakeService} from "../../../services/mat-snake-service";

@Component({
  selector: 'app-course-main',
  templateUrl: './course-main.component.html',
  styleUrl: './course-main.component.scss'
})
export class CourseMainComponent implements ICourseChildEvents, OnInit {
  protected member: ICourseUserPreviewDto = UserService.getUserPreviewDtoPlaceholder();
  private courseId: string = "";
  protected course?: ICourse
  protected assignments: IAssignment[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private snake: MatSnakeService,
    private courseService: CourseService,
    private assignmentService: AssignmentService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.data.subscribe(data => {
      this.member = data['member'];
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.courseId = params.get('courseId') || ""

      // this.courseService.getCourse(this.courseId)
      //   .subscribe((response: ICourse) => {
      //     this.course = response;
      //   }, error => this.snake.error(error))
      //
      // this.assignmentService.getByCourseId(this.courseId)
      //   .subscribe((response: IAssignment[]) => {
      //     this.assignments = response
      //   }, error => this.snake.error(error))
    });
  }

  getButtonsVisibility(): Partial<Record<CourseChildEventType, ICourseButtonDetails>> {
    return {
      EDIT: {
        visible: this.member.memberType === MemberType.EDUCATOR,
        text: "Edit"
      }
    }
  }

  onButtonClicked(type: CourseChildEventType): void {
    switch (type) {
      case CourseChildEventType.EDIT:
        this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
        break
    }
  }

  protected formatDate(date: Date): string {
    return date.toLocaleString('uk-UA', {
      timeZone: 'Europe/Kyiv',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  protected readonly ASSIGNMENT_TYPE_LABEL_INFO = ASSIGNMENT_TYPE_LABEL_INFO;
  protected readonly UserRole = UserRole;
  protected readonly MemberType = MemberType;
}

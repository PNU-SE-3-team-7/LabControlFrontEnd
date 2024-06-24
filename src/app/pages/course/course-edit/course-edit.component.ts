import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {IAssignment} from "../../../models/IAssignment";
import {ASSIGNMENT_TYPE_LABEL_INFO} from "../../../components/labels/assignment-type-states";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {CourseChildEventType, ICourseChildEvents} from "../course.component";
import {CourseService} from "../../../services/api/course.service";
import {ICourse, ICourseCreateDto} from "../../../models/ICourse";
import {MatSnakeService} from "../../../services/mat-snake-service";
import {UserService} from "../../../services/api/user-service";
import {AssignmentService} from "../../../services/api/assignment-service";
import {ICourseUserPreviewDto, IUser, MemberType, UserRole} from "../../../models/IUser";
import {Subscription} from "rxjs";

interface CourseEditFormType {
  name: FormControl<string>,
  summary: FormControl<string>,
}

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.scss'
})
export class CourseEditComponent extends ICourseChildEvents implements OnInit {
  private member: ICourseUserPreviewDto = UserService.getUserPreviewDtoPlaceholder()
  private user!: IUser | null
  private userSubscription: Subscription | null = null;
  private courseId?: string = "";
  protected course?: ICourse
  protected assignments: IAssignment[] = [];


  protected courseEditForm: FormGroup<CourseEditFormType> = new FormGroup<CourseEditFormType>(<CourseEditFormType>{
    name: new FormControl<string>(""),
    summary: new FormControl<string>(""),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private snake: MatSnakeService,
    private courseService: CourseService,
    private userService: UserService,
    private assignmentService: AssignmentService,
  ) {
    super()

    this.courseEditForm = fb.group<CourseEditFormType>(<CourseEditFormType>{
      name: new FormControl<string>(""),
      summary: new FormControl<string>(""),
    })

    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user = user;
      this.updateParentButtons()
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.data.subscribe(data => {
      this.member = data['member'];
    });

    this.activatedRoute.parent?.paramMap.subscribe(params => {
      this.courseId = params.get('courseId') || '';

      if (this.courseId != "") {
        this.courseService.getCourse(this.courseId).subscribe(response => {
          this.course = response

          this.courseEditForm = this.fb.group<CourseEditFormType>(<CourseEditFormType>{
            name: new FormControl<string>(this.course.name),
            summary: new FormControl<string>(this.course.summary),
          })
        }, error => this.snake.error(error))
        this.assignmentService.getByCourseId(this.courseId)
          .subscribe((response: IAssignment[]) => {
            this.assignments = response
          }, error => this.snake.error(error))
      }
    });
  }

  private updateParentButtons() {
    super.updateButtonVisibility({
      SAVE: {
        visible: this.member.memberType === MemberType.EDUCATOR
          || this.courseId == "" && this.user?.role === UserRole.TEACHER,
        text: "Save",
      },
      DELETE: {
        visible: this.member.memberType === MemberType.EDUCATOR,
        text: "Delete",
        ngClasses: ["cancel"]
      }
    })
  }

  onButtonClicked(type: CourseChildEventType): void {
    if (type == CourseChildEventType.SAVE) {
      console.log(this.buildCourseCreateDto())

      if (this.courseId == "") {
        this.courseService.createCourse(this.buildCourseCreateDto()).subscribe(response => {
          console.log("sddf")
          this.router.navigateByUrl(`/course/${response.id}`)
          this.snake.info("Курс успішно створено")
        }, error => this.snake.error(error))
      } else {
        this.courseService.updateCourse(this.buildCourseDto()).subscribe(response => {
          console.log(response)

          this.snake.info("Курс успішно оновлено")
        })
      }
    }
  }

  private buildCourseDto(): ICourse {
    return {
      id: this.course?.id || "",
      name: this.courseEditForm.controls?.name.value,
      summary: this.courseEditForm.controls?.summary.value,
      ownerId: this.member.id
    }
  }

  private buildCourseCreateDto(): ICourseCreateDto {
    return {
      name: this.courseEditForm.controls?.name.value,
      summary: this.courseEditForm.controls?.summary.value,
      ownerId: this.user?.id || ""
    }
  }

  protected goToAssignmentEdit(id: string): void {
    this.router.navigateByUrl(`/course/${this.courseId}/assignment/${id}`)
  }

  protected dropAssignment(event: CdkDragDrop<any>): void {
    moveItemInArray(
      this.assignments, event.previousIndex, event.currentIndex
    );

    for (let i = 0; i < this.assignments.length; ++i) {
      this.assignments[i].sequence = i + 1
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
}

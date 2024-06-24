import {Component, OnInit} from '@angular/core';
import {CourseChildEventType, ICourseChildEvents} from "../course.component";
import {ActivatedRoute, Router} from "@angular/router";
import {AssignmentType, AutoType, GradeType, IAssignment, IAssignmentCreateDto} from "../../../models/IAssignment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ASSIGNMENT_TYPE_LABEL_INFO} from "../../../components/labels/assignment-type-states";
import {ICourseUserPreviewDto, MemberType} from "../../../models/IUser";
import {UserService} from "../../../services/api/user-service";
import {AssignmentService} from "../../../services/api/assignment-service";
import {MatSnakeService} from "../../../services/mat-snake-service";

interface ICourseAssignmentEditFormType {
  title: FormControl<string>
  description: FormControl<string>
  type: FormControl<AssignmentType>
  dueDate: FormControl<Date | undefined>
  submissionEnabled: FormControl<boolean>;
  visibilityStart: FormControl<Date | undefined>
  visibilityEnd: FormControl<Date | undefined>
  gradeType: FormControl<GradeType>
  autoType: FormControl<AutoType>
  maxGrade: FormControl<number>
  weight: FormControl<number>,
  threshold: FormControl<number>,
}

@Component({
  selector: 'app-course-assignment-edit',
  templateUrl: './course-assignment-edit.component.html',
  styleUrl: './course-assignment-edit.component.scss'
})
export class CourseAssignmentEditComponent extends ICourseChildEvents implements OnInit {
  private member: ICourseUserPreviewDto = UserService.getUserPreviewDtoPlaceholder()
  private action?: "CREATE" | "EDIT";
  private courseId: string = '';
  private parentId: string = '';
  private assignmentId: string = ''
  protected assignment: IAssignment = AssignmentService.getPlaceholder()
  protected subAssignments: IAssignment[] = []

  protected assignmentEditForm?: FormGroup<ICourseAssignmentEditFormType>

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snake: MatSnakeService,
    private assignmentService: AssignmentService,
    private userService: UserService,
  ) {
    super()
    this.buildAssignmentEditForm()
  }

  ngOnInit(): void {
    this.userService.courseMember$.subscribe(member => {
      if (member != null) {
        this.member = member

        this.updateButtons()
      }
    })

    this.activatedRoute.paramMap.subscribe(params => {
      this.parentId = params.get('parentId') || ""
      this.assignmentId = params.get('assignmentId') || ""
      this.action = this.parentId == "" ? "CREATE" : "EDIT"
    });

    this.activatedRoute.parent?.paramMap.subscribe(params => {
      this.courseId = params.get('courseId') || '';
    });
  }

  private updateButtons() {
    super.updateButtonVisibility({
      DELETE: {
        visible: this.member.memberType === MemberType.EDUCATOR && this.action != "CREATE",
        text: 'Delete',
        ngClasses: ["cancel"]
      },
      SAVE: {
        visible: true,
        text: this.action == "CREATE" ? "Create" : "Save",
      }
    })
  }

  onButtonClicked(type: CourseChildEventType): void {
    if (type === CourseChildEventType.SAVE) {
      if (this.action === "CREATE") {
        this.assignmentService.create(this.buildAssignmentCreateDto())
          .subscribe(response => {

            this.router.navigateByUrl(`/course/${response.id}`)
            this.snake.info("Курс успішно створено")
          }, error => this.snake.error(error))
      } else {
        this.assignmentService.update(this.buildAssignmentDto())
          .subscribe(response => {

            this.assignment = response

            this.snake.info("Курс успішно оновлено")
          }, error => this.snake.error(error))
      }
    }
  }

  private buildAssignmentEditForm(): void {
    const a = this.assignment
    this.assignmentEditForm = this.fb.group<ICourseAssignmentEditFormType>(<ICourseAssignmentEditFormType>{
      title: new FormControl<string>(a.title || "", [Validators.required]),
      description: new FormControl<string>(a.description || "", [Validators.required]),
      type: new FormControl<AssignmentType>(a.type || AssignmentType.ASSIGNMENT, [Validators.required]),
      dueDate: new FormControl<Date | null>(a.dueDate, [Validators.required]),
      submissionEnabled: new FormControl<boolean>(a.submissionEnabled || true, [Validators.required]),
      visibilityStart: new FormControl<Date | null>(a.visibilityStart, [Validators.required]),
      visibilityEnd: new FormControl<Date | null>(a.visibilityEnd, [Validators.required]),
      gradeType: new FormControl<GradeType>(a.gradeType || GradeType.CONTINUOUS, [Validators.required]),
      autoType: new FormControl<AutoType>(a.autoType || AutoType.MANUAL, [Validators.required]),
      maxGrade: new FormControl<number>(a.maxGrade, [Validators.required]),
      weight: new FormControl<number>(a.weight, [Validators.required]),
      threshold: new FormControl<number>(a.threshold, [Validators.required]),
    })
  }

  private buildAssignmentDto(): IAssignment {
    return {
      ...this.assignment,
      ...this.buildAssignmentCreateDto()
    };
  }

  private buildAssignmentCreateDto(): IAssignmentCreateDto {
    const formControls = this.assignmentEditForm?.controls;
    return {
      courseId: this.courseId,
      parentId: this.parentId,
      title: formControls?.title.value || this.assignment.title,
      description: formControls?.description.value || this.assignment.description,
      type: formControls?.type.value || this.assignment.type,
      autoType: formControls?.autoType.value || this.assignment.autoType,
      submissionEnabled: formControls?.submissionEnabled.value || this.assignment.submissionEnabled,
      dueDate: formControls?.dueDate.value || this.assignment.dueDate,
      gradeType: formControls?.gradeType.value || this.assignment.gradeType,
      visibilityEnd: formControls?.visibilityEnd.value || this.assignment.visibilityEnd,
      visibilityStart: formControls?.visibilityStart.value || this.assignment.visibilityStart,
      maxGrade: formControls?.maxGrade.value || this.assignment.maxGrade,
      weight: formControls?.weight.value || this.assignment.weight,
      threshold: formControls?.threshold.value || this.assignment.threshold,
      sequence: 1
    };
  }

  public formatDate(date: Date): string {
    return date.toLocaleString('uk-UA', {
      timeZone: 'Europe/Kyiv',
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  protected readonly AssignmentType = AssignmentType;
  protected readonly GradeType = GradeType;
  protected readonly ASSIGNMENT_TYPE_LABEL_INFO = ASSIGNMENT_TYPE_LABEL_INFO;
  protected readonly AutoType = AutoType;
}

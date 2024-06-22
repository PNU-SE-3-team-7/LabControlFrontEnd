import {Component, OnInit} from '@angular/core';
import {CourseChildEventType, ICourseButtonDetails, ICourseChildEvents} from "../course.component";
import {ActivatedRoute} from "@angular/router";
import {AssignmentType, AutoType, GradeType, IAssignment, IAssignmentCreateDto} from "../../../models/IAssignment";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ASSIGNMENT_TYPE_LABEL_INFO} from "../../../components/labels/assignment-type-states";
import {ICourseUserPreviewDto, MemberType} from "../../../models/IUser";
import {UserService} from "../../../services/api/user-service";
import {AssignmentService} from "../../../services/api/assignment-service";

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
export class CourseAssignmentEditComponent implements ICourseChildEvents, OnInit {
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
    private fb: FormBuilder,
    private assignmentService: AssignmentService
  ) {
    this.assignmentEditForm = fb.group<ICourseAssignmentEditFormType>(<ICourseAssignmentEditFormType>{
      title: new FormControl<string>(""),
      description: new FormControl<string>(""),
      type: new FormControl<AssignmentType>(AssignmentType.TASK),
      dueDate: new FormControl<Date | null>(null),
      submissionEnabled: new FormControl<boolean>(true),
      visibilityStart: new FormControl<Date | null>(null),
      visibilityEnd: new FormControl<Date | null>(null),
      gradeType: new FormControl<GradeType>(GradeType.DISCRETE),
      autoType: new FormControl<AutoType>(AutoType.MANUAL),
      maxGrade: new FormControl<number>(10),
      weight: new FormControl<number>(1),
      threshold: new FormControl<number>(0),
    })
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.data.subscribe(data => {
      this.member = data['member'];
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.parentId = params.get('parentId') || ""
      this.assignmentId = params.get('assignmentId') || ""
      this.action = this.parentId ? "CREATE" : "EDIT"
    });
    this.activatedRoute.parent?.paramMap.subscribe(params => {
      this.courseId = params.get('courseId') || '';
    });
  }

  getButtonsVisibility(): Partial<Record<CourseChildEventType, ICourseButtonDetails>> {
    return {
      DELETE: {
        visible: this.member.memberType === MemberType.EDUCATOR,
        text: 'Delete',
        ngClasses: ["cancel"]
      },
      SAVE: {
        visible: true,
        text: 'Save',
      }
    }
  }


  onButtonClicked(type: CourseChildEventType): void {
    if (type === CourseChildEventType.DELETE) {
      if (this.action === "CREATE") {
        this.assignmentService.create()
      } else {

      }
    }
  }

  private buildAssignentCreateDto(): IAssignmentCreateDto {
    const formControls = this.assignmentEditForm?.controls;

    return {
      courseId: "",
      parentId: "", // Предполагается, что parentId должен быть установлен извне, если необходимо
      title: formControls?.title.value || "",
      description: formControls?.description.value || "",
      type: formControls.type,
      autoType: formControls?.autoType.value || AutoType.MANUAL,
      submissionEnabled: formControls.submissionEnabled,
      dueDate: formControls.dueDate,
      gradeType: formControls.gradeType,
      createdDate: new Date(), // Устанавливаем текущую дату как дату создания
      updatedDate: new Date(), // Устанавливаем текущую дату как дату обновления
      visibilityEnd: formControls.visibilityEnd,
      visibilityStart: formControls.visibilityStart,
      maxGrade: formControls.maxGrade || 0,
      weight: formControls.weight || 0,
      threshold: formControls.threshold || 0,
      sequence: 0 // Предполагается, что sequence должен быть установлен извне
    };
  }
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

import {Component, OnInit} from '@angular/core';
import {CourseChildEventType, ICourseButtonDetails, ICourseChildEvents} from "../course/course.component";
import {ActivatedRoute} from "@angular/router";
import {AssignmentType, AutoType, GradeType, IAssignment} from "../../models/IAssignment";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ASSIGNMENT_TYPE_LABEL_INFO} from "../../components/labels/assignment-type-states";

interface ICourseAssignmentEditFormType {
  title: FormControl<string>
  description: FormControl<string>
  type: FormControl<AssignmentType>
  dueDate: FormControl<Date | undefined>
  visibilityStart: FormControl<Date | undefined>
  visibilityEnd: FormControl<Date | undefined>
  // visibility: FormControl<boolean>
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
  private action?: "CREATE" | "EDIT";
  private courseId: string = '';
  private parentId: string = '';
  private assignmentId: string = ''
  protected assignment: IAssignment = {
    id: '1',
    courseId: 'course1',
    parentId: 'parent1',
    title: 'Лабораторна №14 JWT',
    description: 'Продовження виконання 13 лабораторної:\n' +
      '1. Використати Basic Auth (модуль Flask-HTTPAuth) для реалізації отримання access  jwt-токена тільки для зареєстрованого користувача на сайті. \n' +
      '2. Розмежуйте доступ до операцій Create, Update, Delete для моделі Todo ( доступ до цих операцій тільки по валідному jwt-токену).\n' +
      '3. Обробити всі можливі ситуації при виконанні запитів.\n' +
      '\n' +
      '4. Протестувати і заскрінити запити за допомогою Postman.\n' +
      '\n' +
      '(Опціонально, будуть бонуси) Додати refresh token та операції refresh і revoke для токенів\n',
    type: AssignmentType.ASSIGNMENT,
    submissionEnabled: true,
    updatedDate: new Date('2023-06-01T10:00:00Z'),
    createdDate: new Date('2023-05-15T12:30:00Z'),
    dueDate: new Date('2023-06-15T23:59:59Z'),
    visibilityStart: new Date('2023-06-01T00:00:00Z'),
    visibilityEnd: new Date('2023-06-30T23:59:59Z'),
    visibility: true,
    gradeType: GradeType.CONTINUOUS,
    autoType: AutoType.MANUAL,
    maxGrade: 10,
    weight: 25,
    threshold: 70,
    sequence: 1
  }
  protected subAssignments: IAssignment[] = [
    {
      id: '2',
      courseId: 'course2',
      parentId: 'parent2',
      title: 'Assignment 2',
      description: 'This is the second assignment',
      type: AssignmentType.ASSIGNMENT,
      submissionEnabled: true,
      updatedDate: new Date('2023-06-10T14:30:00Z'),
      createdDate: new Date('2023-05-20T09:00:00Z'),
      dueDate: new Date('2023-06-20T23:59:59Z'),
      visibilityStart: new Date('2023-06-10T00:00:00Z'),
      visibilityEnd: new Date('2023-07-05T23:59:59Z'),
      visibility: true,
      gradeType: GradeType.CONTINUOUS,
      autoType: AutoType.AUTO,
      maxGrade: 10,
      weight: 30,
      threshold: 80,
      sequence: 2
    },
    {
      id: '3',
      courseId: 'course3',
      parentId: 'parent3',
      title: 'Assignment 3',
      description: 'This is the third assignment',
      type: AssignmentType.ASSIGNMENT,
      submissionEnabled: false,
      updatedDate: new Date('2023-06-15T16:00:00Z'),
      createdDate: new Date('2023-05-25T10:30:00Z'),
      dueDate: new Date('2023-07-01T23:59:59Z'),
      visibilityStart: new Date('2023-06-20T00:00:00Z'),
      visibilityEnd: new Date('2023-07-10T23:59:59Z'),
      visibility: true,
      gradeType: GradeType.CONTINUOUS,
      autoType: AutoType.MANUAL,
      maxGrade: 10,
      weight: 40,
      threshold: 75,
      sequence: 3
    },
    {
      id: '4',
      courseId: 'course4',
      parentId: 'parent4',
      title: 'Assignment 4',
      description: 'This is the fourth assignment',
      type: AssignmentType.ASSIGNMENT,
      submissionEnabled: true,
      updatedDate: new Date('2023-06-20T11:15:00Z'),
      createdDate: new Date('2023-05-30T14:45:00Z'),
      dueDate: new Date('2023-07-10T23:59:59Z'),
      visibilityStart: new Date('2023-06-25T00:00:00Z'),
      visibilityEnd: new Date('2023-07-20T23:59:59Z'),
      visibility: false,
      gradeType: GradeType.CONTINUOUS,
      autoType: AutoType.AUTO,
      maxGrade: 10,
      weight: 20,
      threshold: 60,
      sequence: 4
    },
    {
      id: '5',
      courseId: 'course5',
      parentId: 'parent5',
      title: 'Assignment 5',
      description: 'This is the fifth assignment',
      type: AssignmentType.ASSIGNMENT,
      submissionEnabled: true,
      updatedDate: new Date('2023-06-25T09:30:00Z'),
      createdDate: new Date('2023-06-01T16:00:00Z'),
      dueDate: new Date('2023-07-15T23:59:59Z'),
      visibilityStart: new Date('2023-07-01T00:00:00Z'),
      visibilityEnd: new Date('2023-07-25T23:59:59Z'),
      visibility: true,
      gradeType: GradeType.CONTINUOUS,
      autoType: AutoType.MANUAL,
      maxGrade: 10,
      weight: 15,
      threshold: 65,
      sequence: 5
    }
  ];

  protected assignmentEditForm?: FormGroup<ICourseAssignmentEditFormType>

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.assignmentEditForm = fb.group<ICourseAssignmentEditFormType>(<ICourseAssignmentEditFormType>{
      title: new FormControl<string>(""),
      description: new FormControl<string>(""),
      type: new FormControl<AssignmentType>(AssignmentType.TASK),
      dueDate: new FormControl<Date | null>(null),
      visibilityStart: new FormControl<Date | null>(null),
      visibilityEnd: new FormControl<Date | null>(null),
      gradeType: new FormControl<GradeType>(GradeType.DISCRETE),
      autoType: new FormControl<AutoType>(AutoType.MANUAL),
      maxGrade: new FormControl<number>(10),
      weight: new FormControl<number>(1),
      threshold: new FormControl<number>(0),
    })
  }

  getButtonsVisibility(): Partial<Record<CourseChildEventType, ICourseButtonDetails>> {
    return {
      DELETE: {
        visible: true,
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
    console.log("Course id:" + this.courseId);
    console.log("Parent id:" + this.parentId);
    console.log(this.assignmentEditForm?.controls.title.value)
    console.log(this.assignmentEditForm?.controls.description.value)
    console.log(this.assignmentEditForm?.controls.type.value)
    console.log(this.assignmentEditForm?.controls.dueDate.value)
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.parentId = params.get('parentId') || ""
      this.action = this.parentId ? "CREATE" : "EDIT"
    });
    this.activatedRoute.parent?.paramMap.subscribe(params => {
      this.courseId = params.get('courseId') || '';
    });
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

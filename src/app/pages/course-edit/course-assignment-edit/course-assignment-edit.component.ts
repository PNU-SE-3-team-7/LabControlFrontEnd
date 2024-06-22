import {Component, OnInit} from '@angular/core';
import {ICourseButtonsVisibility, ICourseChildEvents} from "../../course/course.component";
import {ActivatedRoute} from "@angular/router";
import {AssignmentType, AutoType, GradeType, IAssignment} from "../../../models/IAssignment";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface ICourseAssignmentEditFormType {
  title: FormControl<string>
  description: FormControl<string>
  type: FormControl<AssignmentType>
  dueDate: FormControl<Date | undefined>
  visibilityStart: FormControl<Date | undefined>
  visibilityEnd: FormControl<Date | undefined>
  visibility: FormControl<boolean>
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
  private courseId: string = '';
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
  protected subAssignment: IAssignment[] = []

  protected assignmentEditForm?: FormGroup<ICourseAssignmentEditFormType>

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.assignmentEditForm = fb.group<ICourseAssignmentEditFormType>(<ICourseAssignmentEditFormType>{
      title: new FormControl<string>(""),
      description: new FormControl<string>(""),
      type: new FormControl<AssignmentType>(AssignmentType.TASK),
      dueDate: new FormControl<Date | undefined>(undefined),
      visibilityStart: new FormControl<Date | undefined>(undefined),
      visibilityEnd: new FormControl<Date | undefined>(undefined),
      visibility: new FormControl<boolean>(false),
      gradeType: new FormControl<GradeType>(GradeType.DISCRETE),
      autoType: new FormControl<AutoType>(AutoType.MANUAL),
      maxGrade: new FormControl<number>(10),
      weight: new FormControl<number>(1),
      threshold: new FormControl<number>(0),
    })
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
    console.log(this.assignmentEditForm?.controls.title.value)
    console.log(this.assignmentEditForm?.controls.description.value)
    console.log(this.assignmentEditForm?.controls.type.value)
    console.log(this.assignmentEditForm?.controls.dueDate.value)
  }

  protected readonly AssignmentType = AssignmentType;
  protected readonly GradeType = GradeType;
}

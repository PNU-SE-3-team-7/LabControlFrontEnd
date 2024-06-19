import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AssignmentType, AutoType, GradeType, IAssignment} from "../../../models/IAssignment";
import {AccuracyGrade, CompletionGrade, ISubmission, SubmissionStatus} from "../../../models/ISubmission";
import {ACCURACY_GRADE_LABEL_INFO} from "../../../components/labels/accurast-grade-states";
import {COMPLETION_GRADE_LABEL_INFO} from "../../../components/labels/completion-grade-states";
import {IAssignmentAttachedContent, ISubmissionAttachedContent} from "../../../models/IAttachedContentBase";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {ASSIGNMENT_TYPE_LABEL_INFO} from "../../../components/labels/assignment-type-states";
import {ISubmissionComment} from "../../../models/IComment";
import {IAttachedComponentAddLinkType} from "../../../components/attached-content/attached-content.component";

@Component({
  selector: 'app-course-assignment',
  templateUrl: './course-assignment.component.html',
  styleUrl: './course-assignment.component.scss'
})
export class CourseAssignmentComponent implements OnInit {
  protected assignment: IAssignment = {
    id: '1',
    courseId: 'course1',
    parentId: 'parent1',
    title: 'Лабораторна №14 JWT',
    description: 'Продовження виконання 13 лабораторної:\n' +
      '1. Використати Basic Auth (модуль Flask-HTTPAuth) для реалізації отримання access  jwt-токена тільки для зареєстрованого користувача на сайті. \n' +
      '2. Розмежуйте доступ до операцій Сreate, Update, Delete для моделі Todo ( доступ до цих операцій тільки по валідному jwt-токену).\n' +
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
  protected assignmentAttachedContent: IAssignmentAttachedContent[] = [
    {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      assignmentId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }
  ]
  protected attachedContent: ISubmissionAttachedContent[] = [
    {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    }, {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },
  ]
  protected submission: ISubmission = {
    assignmentId: '34345',
    userId: '12314324',
    parentId: '456546',
    turnedInDate: new Date('2023-06-01T10:00:00Z'),
    submissionStatus: SubmissionStatus.NOT_TURNED_IN,
    grade: 7,
    autoGrade: 8,
    createdDate: new Date('2023-06-01T10:00:00Z'),
    updatedDate: new Date('2023-06-01T10:00:00Z'),
    accuracyGrade: AccuracyGrade.OFF_TASK,
    completionGrade: CompletionGrade.OVERDONE
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
  protected submissionComments: ISubmissionComment[] = [
    {
      submissionId: 'sdfsdf',
      id: '1',
      senderId: '1',
      createdDate: new Date('2023-06-10T14:30:00Z'),
      message: 'sdfgdfagdafg'
    },
    {
      submissionId: 'sdfsdf',
      id: '1',
      senderId: 'sdfgfgd',
      createdDate: new Date('2023-06-10T14:30:00Z'),
      message: 'adfgadfgadfg'
    },
    {
      submissionId: 'sdfsdf',
      id: '1',
      senderId: 'fdgfdjjsgf',
      createdDate: new Date('2023-06-10T14:30:00Z'),
      message: 'Mes234234234sage'
    },
    {
      submissionId: 'sdfsdf',
      id: 'sdfsdf',
      senderId: 'dfsdfrfdgfd',
      createdDate: new Date('2023-06-10T14:30:00Z'),
      message: 'Messag345345345345e'
    },
  ]

  constructor(
    private router: ActivatedRoute,
    private matSnack: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params)
  }

  protected onRemoveAssigmentAttachedContent(itemId: string): void {
    this.assignmentAttachedContent = this.assignmentAttachedContent.filter(content => content.id !== itemId)
  }

  protected onRemoveSubmissionAttachedContent(itemId: string): void {
    this.attachedContent = this.attachedContent.filter(content => content.id !== itemId)
  }

  protected onSubmissionAttachedContentUpdated(content: IAttachedComponentAddLinkType) {
    this.attachedContent.push({
      fileName: "",
      fileUri: content.url,
      id: "123",
      submissionId: "2323"
    })
  }

  protected onAssignmentAttachedContentUpdated(content: IAttachedComponentAddLinkType) {
    this.assignmentAttachedContent.push({
      fileName: "",
      fileUri: content.url,
      id: "123",
      assignmentId: "23254"
    })
  }

  public formatDate(date: Date): string {
    return date.toLocaleString('uk-UA', {
      timeZone: 'Europe/Kyiv',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  protected readonly ACCURACY_GRADE_LABEL_INFO = ACCURACY_GRADE_LABEL_INFO;
  protected readonly COMPLETION_GRADE_LABEL_INFO = COMPLETION_GRADE_LABEL_INFO;
  protected readonly ASSIGNMENT_TYPE_LABEL_INFO = ASSIGNMENT_TYPE_LABEL_INFO;
}

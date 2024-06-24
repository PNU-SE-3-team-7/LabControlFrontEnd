import {ChangeDetectorRef, Component, OnInit,} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ICourseUserPreviewDto} from "../../models/IUser";
import {UserService} from "../../services/api/user-service";
import {BehaviorSubject, Subscription} from "rxjs";

export enum CourseChildEventType {
  CREATE = "CREATE",
  DELETE = "DELETE",
  EDIT = "EDIT",
  SAVE = "SAVE",
  ADD = "ADD",
}

export interface ICourseButtonDetails {
  visible: boolean
  text: string
  ngClasses?: string[]
}

export abstract class ICourseChildEvents {
  private buttonsSubject = new BehaviorSubject<Partial<Record<CourseChildEventType, ICourseButtonDetails>>>({});
  public buttons$ = this.buttonsSubject.asObservable();

  protected updateButtonVisibility(items: Partial<Record<CourseChildEventType, ICourseButtonDetails>>) {
    this.buttonsSubject.next(items)
  }

  // getButtonsVisibility(): Partial<Record<CourseChildEventType, ICourseButtonDetails>>

  public abstract onButtonClicked(type: CourseChildEventType): void
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  private member: ICourseUserPreviewDto = UserService.getUserPreviewDtoPlaceholder()

  private defaultButtonsVisibility: Record<CourseChildEventType, ICourseButtonDetails> = {
    CREATE: {visible: false, text: 'Create'},
    DELETE: {visible: false, text: 'Delete'},
    ADD: {visible: false, text: 'Add'},
    SAVE: {visible: false, text: 'Save'},
    EDIT: {visible: false, text: 'Edit'}
  };

  protected courseId: string = "";
  protected childComponentInstance?: ICourseChildEvents;
  protected buttonsVisibility: Record<CourseChildEventType, ICourseButtonDetails> = this.defaultButtonsVisibility;
  private buttonsSubscription: Subscription | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private cdr: ChangeDetectorRef,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.member = this.userService.getCourseMember(this.courseId);

    this.activatedRoute.data.subscribe(data => {
      data['member'] = this.member;
    });

    if ("courseId" in this.activatedRoute.snapshot.params) {
      this.courseId = this.activatedRoute.snapshot.params["courseId"] || "";
    }
  }

  protected onActivatedRouteChange(component: ICourseChildEvents): void {
    this.childComponentInstance = component
    this.buttonsSubscription = this.childComponentInstance.buttons$.subscribe(items => {
      this.buttonsVisibility = {...this.defaultButtonsVisibility, ...items};
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.buttonsSubscription) {
      this.buttonsSubscription.unsubscribe();
    }
  }

  protected getButtonsDetails(): { type: CourseChildEventType, details: ICourseButtonDetails }[] {
    return Object.values(CourseChildEventType)
      .map(type => {
        return {
          type: type,
          details: this.buttonsVisibility[type]
        }
      }).filter(item => item.details.visible)
  }

  protected callChildOnClickMethod(type: CourseChildEventType): void {
    this.childComponentInstance?.onButtonClicked(type)
  }

  protected previousPage(): void {
    this.location.back();
  }

  protected isPeoplesPageAvailable(): boolean {
    return "courseId" in this.activatedRoute.snapshot.params
  }
}

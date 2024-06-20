import {Component, ComponentRef, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {filter,} from 'rxjs/operators';

export interface ICourseButtonsVisibility {
  createCourseVisible: boolean
  saveCourseVisible: boolean
}

export interface ICourseChildEvents {
  getButtonsVisibility(): ICourseButtonsVisibility

  onSaveButtonClicked(): void
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnDestroy {
  protected courseId: string = ""
  private childComponentRef?: ComponentRef<any>
  protected childComponentInstance?: ICourseChildEvents
  protected buttonsVisibility: ICourseButtonsVisibility = {
    createCourseVisible: false,
    saveCourseVisible: false,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnDestroy(): void {
    this.childComponentRef?.destroy();
  }

  ngOnInit(): void {
    if ("courseId" in this.activatedRoute.snapshot.params) {
      this.courseId = this.activatedRoute.snapshot.params["courseId"] || "";
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(this.updateChildComponentInstance);

    this.updateChildComponentInstance()
  }

  protected save(): void {
    console.log(this.childComponentInstance)
    console.log('DFdsf')
    this.childComponentInstance?.onSaveButtonClicked()
  }

  protected previousPage(): void {
    this.location.back();
  }

  protected isPeoplesPageAvailable(): boolean{
    return "courseId" in this.activatedRoute.snapshot.params
  }

  private updateChildComponentInstance(): void {
    console.log(this.activatedRoute)
    let currentRoute = this.activatedRoute.firstChild;

    while (currentRoute?.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    if (currentRoute?.component) {
      this.childComponentRef = this.viewContainerRef.createComponent(currentRoute.component);

      this.childComponentInstance = this.childComponentRef.instance as ICourseChildEvents;
      this.buttonsVisibility = this.childComponentInstance.getButtonsVisibility()
    }
  }
}

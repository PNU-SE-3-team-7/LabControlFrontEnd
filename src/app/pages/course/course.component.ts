import {ChangeDetectorRef, Component, OnInit,} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

export interface ICourseButtonsVisibility {
  createButtonVisible: boolean
  saveButtonVisible: boolean
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
export class CourseComponent implements OnInit {
  protected courseId: string = "";
  protected childComponentInstance?: ICourseChildEvents;
  protected buttonsVisibility: ICourseButtonsVisibility = {
    createButtonVisible: false,
    saveButtonVisible: false,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    if ("courseId" in this.activatedRoute.snapshot.params) {
      this.courseId = this.activatedRoute.snapshot.params["courseId"] || "";
    }
  }

  protected save(): void {
    this.childComponentInstance?.onSaveButtonClicked()
  }

  protected previousPage(): void {
    this.location.back();
  }

  protected onActivatedRouteChange(component: ICourseChildEvents): void {
    this.childComponentInstance = component
    this.buttonsVisibility = this.childComponentInstance.getButtonsVisibility()
    this.cdr.detectChanges();
  }

  protected isPeoplesPageAvailable(): boolean {
    return "courseId" in this.activatedRoute.snapshot.params
  }
}

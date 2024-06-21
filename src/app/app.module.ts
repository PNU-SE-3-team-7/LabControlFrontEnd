import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HeaderComponent} from './components/header/header.component';
import {CourseListComponent} from './pages/course-list/course-list.component';
import {RoutingButtonComponent} from './components/buttons/routing-button/routing-button.component';
import {MatButton} from "@angular/material/button";
import {BaseButtonComponent} from './components/buttons/base-button/base-button.component';
import {BaseLabelComponent} from './components/labels/base-label/base-label.component';
import {AccuracyGradeLabelComponent} from './components/labels/accuracy-grade-label/accuracy-grade-label.component';
import {CrossButtonComponent} from './components/buttons/cross-button/cross-button.component';
import {
  AddAttachedLinkDialogComponent
} from './components/dialogs/add-attached-link-dialog/add-attached-link-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {OnViewFocusDirective} from "./components/directives/on-view-focus.directive";
import {BaseStrokeInputComponent} from './components/inputs/base-stroke-input/base-stroke-input.component';
import {AppStrokeButton} from "./components/inputs/base-stroke-input/base-stroke-input.directive";
import {CourseMainComponent} from "./pages/course/course-main/course-main.component";
import {CourseAssignmentComponent} from "./pages/course/course-assignment/course-assignment.component";
import {CourseComponent} from "./pages/course/course.component";
import {AttachedContentComponent} from './components/attached-content/attached-content.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CourseEditComponent} from './pages/course-edit/course-edit.component';
import {
  CourseAssignmentEditComponent
} from './pages/course-edit/course-assignment-edit/course-assignment-edit.component';
import {CdkDrag, CdkDragHandle, CdkDropList} from "@angular/cdk/drag-drop";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseListComponent,
    RoutingButtonComponent,
    CourseAssignmentComponent,
    CourseMainComponent,
    CourseComponent,
    BaseButtonComponent,
    BaseLabelComponent,
    AccuracyGradeLabelComponent,
    CrossButtonComponent,
    BaseLabelComponent,
    AddAttachedLinkDialogComponent,
    OnViewFocusDirective,
    BaseStrokeInputComponent,
    AttachedContentComponent,
    CommentsComponent,
    CourseEditComponent,
    CourseAssignmentEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButton,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    AppStrokeButton,
    CdkDropList,
    MatIcon,
    CdkDragHandle,
    MatTooltip,
    CdkDrag,
    MatLabel,
    MatSelect,
    MatOption,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from "./pages/course/course.component";
import {CourseListComponent} from "./pages/course-list/course-list.component";
import {CourseMainComponent} from "./pages/course/course-main/course-main.component";
import {CourseAssignmentComponent} from "./pages/course/course-assignment/course-assignment.component";
import {CourseEditComponent} from "./pages/course-edit/course-edit.component";
import {
  CourseAssignmentEditComponent
} from "./pages/course-edit/course-assignment-edit/course-assignment-edit.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/course",
    pathMatch: "full"
  }, {
    path: "course",
    component: CourseListComponent,
  }, {
    path: "course/create",
    component: CourseEditComponent,
  },{
    path: 'assignment/create',
    component: CourseAssignmentEditComponent,
  }, {
    path: 'course/:courseId',
    component: CourseComponent,
    children: [
      {
        path: '',
        component: CourseMainComponent,
      },
      {
        path: 'edit',
        component: CourseEditComponent,
      },
      {
        path: 'assignment/:assignmentId',
        component: CourseAssignmentComponent,
      },
      {
        path: 'assignment/:assignmentId/edit',
        component: CourseAssignmentEditComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

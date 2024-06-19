import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from "./pages/course/course.component";
import {CourseListComponent} from "./pages/course-list/course-list.component";
import {CourseMainComponent} from "./pages/course/course-main/course-main.component";
import {CourseAssignmentComponent} from "./pages/course/course-assignment/course-assignment.component";
import {CourseEditComponent} from "./pages/course-edit/course-edit.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/course",
    pathMatch: "full"
  }, {
    path: "course",
    component: CourseListComponent,
  }, {
    path: "course/:courseId/edit",
    component: CourseEditComponent,
  },{
    path: 'course/:courseId',
    component: CourseComponent,
    children: [
      {
        path: '',
        component: CourseMainComponent,
      },
      {
        path: 'assignment/:assignmentId',
        component: CourseAssignmentComponent,
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

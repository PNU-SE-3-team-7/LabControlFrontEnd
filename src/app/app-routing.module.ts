import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from "./pages/course/course.component";
import {CourseAssigmentComponent} from "./pages/course/course-assigment/course-assigment.component";
import {CourseListComponent} from "./pages/course-list/course-list.component";
import {CourseMainComponent} from "./pages/course/course-main/course-main.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/course",
    pathMatch: "full"
  }, {
    path: "course",
    title: "Courses",
    component: CourseListComponent,
  },{
    path: 'course/:courseId',
    component: CourseComponent,
    children: [
      {
        path: '',
        component: CourseMainComponent,
      },
      {
        path: 'assigment/:assignmentId',
        component: CourseAssigmentComponent
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

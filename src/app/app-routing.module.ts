import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from "./pages/course/course.component";
import {CourseAssigmentComponent} from "./components/course-assigment/course-assigment.component";
import {CourseListComponent} from "./pages/course-list/course-list.component";

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

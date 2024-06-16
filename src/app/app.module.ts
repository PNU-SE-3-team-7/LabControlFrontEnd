import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseAssigmentComponent } from './components/course-assigment/course-assigment.component';
import {CourseComponent} from "./pages/course/course.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    CourseListComponent,
    CourseAssigmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

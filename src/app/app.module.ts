import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DiaryentryComponent } from './user/diaryentry/diaryentry.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DiaryentryeditComponent } from './user/diaryentryedit/diaryentryedit.component';
import { DiaryentryviewComponent } from './user/diaryentryview/diaryentryview.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DiaryentryComponent,
    DiaryentryeditComponent,
    DiaryentryviewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

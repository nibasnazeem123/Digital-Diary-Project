import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryentryComponent } from './user/diaryentry/diaryentry.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DiaryentryeditComponent } from './user/diaryentryedit/diaryentryedit.component';
import { DiaryentrydeleteComponent } from './user/diaryentrydelete/diaryentrydelete.component';
import { DiaryentryviewComponent } from './user/diaryentryview/diaryentryview.component';

const routes: Routes = [
  {
   path: 'Home', component: HomepageComponent,

    children:
      [
        { path: 'digdiary', component: DiaryentryComponent },
        { path: 'edit/:did', component: DiaryentryeditComponent },
        { path: 'delete/:did', component: DiaryentrydeleteComponent },
        { path: 'view', component: DiaryentryviewComponent },


      ]
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

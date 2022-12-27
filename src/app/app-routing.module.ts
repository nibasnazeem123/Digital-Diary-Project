import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryentryComponent } from './user/diaryentry/diaryentry.component';
//import { CalenderComponent } from './calender/calender.component';
//import { DeletediaryComponent } from './deletediary/deletediary.component';
//import { DiaryComponent } from './diary/diary.component';
//import { DiarydataComponent } from './diarydata/diarydata.component';
//import { EditdiaryComponent } from './editdiary/editdiary.component';
//import { EventComponent } from './event/event.component';
//import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
   // path: 'Home', component: HomepageComponent,

    children:
      [
        { path: 'digdiary', component: DiaryentryComponent },


      ]
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

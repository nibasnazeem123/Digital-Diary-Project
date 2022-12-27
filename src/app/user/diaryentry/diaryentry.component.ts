import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';


@Component({
  selector: 'app-diaryentry',
  templateUrl: './diaryentry.component.html',
  styleUrls: ['./diaryentry.component.scss']
})
export class DiaryentryComponent {

  currdate: any;
  constructor(public datepipe: DatePipe,private fb: FormBuilder,private backendservice:BackendserviceService){


    let currentDateTime =this.datepipe.transform((new Date), 'EEEE, MMMM d, y');
    this.currdate=currentDateTime;
    //console.log(currentDateTime);
  }
  DiaryEntryForm = this.fb.group({Date: [''],  Entry: [''],uid:['']})

      OnSubmit() {
      console.log(this.DiaryEntryForm.value);
      this.backendservice.insertcoursedata(this. DiaryEntryForm.value)
        }

      ngOnInit():void {}
}

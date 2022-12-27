import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackendserviceService } from 'src/app/backendservice.service';
@Component({
  selector: 'app-diaryentryedit',
  templateUrl: './diaryentryedit.component.html',
  styleUrls: ['./diaryentryedit.component.scss']
})
export class DiaryentryeditComponent implements OnInit {
  did: any;
  public Coursedataarray: any;
  EditCourseForm: FormGroup;

  constructor(private route:ActivatedRoute,private Fb:FormBuilder,private backendService:BackendserviceService){

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.did = params.get('did')
      })
      this.EditCourseForm = this.Fb.group({
      did: [''],
      Date: [''], 
      Entry: ['']
      })
  }



ngOnInit(): void{
  this.backendService.getcoursebaseid(this.did).subscribe((data: any) => {
    this.Coursedataarray = data;
    this.EditCourseForm.setValue({
      did: data.did,
      Date: data.date,
      Entry: data.entry

    });
    //this.EditCourseForm.patchValue(this.Coursedataarray)
    });
    }


    onSubmit() {
      this.backendService.Updatecoursedata(this.EditCourseForm.value)

      console.log(this.EditCourseForm.value)
      }
}

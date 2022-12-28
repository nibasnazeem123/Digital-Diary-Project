
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-diaryentrydelete',
  templateUrl: './diaryentrydelete.component.html',
  styleUrls: ['./diaryentrydelete.component.scss']
})
export class DiaryentrydeleteComponent {
  did: any;
  public Coursedataarray: any;
  DeleteForm: FormGroup;

  constructor(private route:ActivatedRoute,private Fb:FormBuilder,private backendService:BackendserviceService){

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.did = params.get('did')
      })
      this.DeleteForm = this.Fb.group({
        title:[''],date: [''],description: [''],uid:['']
      })
  }



ngOnInit(): void{




  this.backendService.getcoursebaseid(this.did).subscribe((data: any) => {
    this.Coursedataarray = data;
    this.DeleteForm.setValue({
      did: data.did,
      title:data.title,
      date: data.date,
      
      description: data.description,
      uid:data.uid,

    });
    //this.DeleteForm.patchValue(this.Coursedataarray)
    });






    }


    onSubmit() {
      this.backendService.deletecoursedata(this.DeleteForm.value)

      console.log(this.DeleteForm.value)
      }

}

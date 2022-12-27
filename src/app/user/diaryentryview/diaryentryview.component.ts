import { Component } from '@angular/core';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-diaryentryview',
  templateUrl: './diaryentryview.component.html',
  styleUrls: ['./diaryentryview.component.scss']
})
export class DiaryentryviewComponent {
  constructor(private backendservice:BackendserviceService){}
  Dataarray: any[]=[];
  ngOnInit()
  {
    this.backendservice.getdata().subscribe((res) => {this.Dataarray = res;})
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

  constructor(private http: HttpClient,private router: Router) { }
  swal: any;
  insertcoursedata(data: any) {
        this.http.post("https://localhost:44351/api/Entry/insEntry", data).toPromise().then(result =>
        {
      console.log(data); console.log(result); alert("Value Inserted Suceesfully !!");this.router.navigate(['/Home/view']); })

  }

  getdata() {
        return this.http.get<any>('https://localhost:44351/api/Entry/viewdata')

      }

    getcoursebaseid(did: any) {
      return this.http.get<any>('https://localhost:44351/api/Entry/ViewdataByid/' + did)

      }

      Updatecoursedata(data:any) {


            this.http.post("https://localhost:44351/api/Entry/Update",data).toPromise().then(result =>
            { console.log(result); alert("Value Update Suceesfully !!"); this.router.navigate(['/Home/view']);})

      }

      deletecoursedata(data:any) {


            this.http.post("https://localhost:44351/api/Entry/Delete",data).toPromise().then(result =>
            { console.log(result); alert("Value Deleted Suceesfully !!"); this.router.navigate(['/Home/view']);})

      }
}

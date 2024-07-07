import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverUrl = "https://user-portal-server-tdai.onrender.com"
  constructor(private http:HttpClient, private router:Router) { }

  loginAPI(email:any,pasword:any){
    //api call
    this.http.get(`${this.serverUrl}/users/1`).subscribe((result:any)=>{
       sessionStorage.setItem("admin",JSON.stringify(result))
       if(email==result.email && pasword==result.password){
         alert("Login success")
          //redirected to dashboard
          this.router.navigateByUrl("dashboard")
       }else{
        alert("Invalid Email / Password")
       }
    })

  }
  
  
  getAdminDetailsAPI(){
    return this.http.get(`${this.serverUrl}/users/1`)
  }

  editAdminAPI(adminDetails:any){
    return this.http.put(`${this.serverUrl}/users/1`,adminDetails)
  }
  
  isLoggedin(){
     return !!sessionStorage.getItem("admin")
  }
}

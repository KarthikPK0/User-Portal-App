import { Component } from '@angular/core';
import { AdminService } from '../adminServices/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //properties
   imgUrl: string = '/assets/user-login.webp'; 
   email:string = ""
   password:string = ""

   constructor(private adminPI:AdminService){}

   login(){
    if(this.email && this.password){
      this.adminPI.loginAPI(this.email,this.password)
    }else{
      alert('Please fill the form completly!!')
    }
   }
}

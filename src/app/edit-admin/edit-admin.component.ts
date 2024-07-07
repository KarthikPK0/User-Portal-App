import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminService } from '../adminServices/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
   adminProfile= "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png"

   adminDetails:any={}
   //share data from child to parent
   @Output() onAdminChange = new EventEmitter() 

  editAdminStatus:boolean = false

  constructor(private adminAPI:AdminService){}

  ngOnInit(): void {
    this.adminAPI.getAdminDetailsAPI().subscribe((result:any)=>{
      this.adminDetails = result
      if(result.Profile){
                 this.adminProfile = result.Profile
      }
    })
  }
  
  editAdminBtnClicked(){
    this.editAdminStatus = true
  }

  getFile(event:any){
    let uploadFile = event.target.files[0]
    let fr = new FileReader()
    fr.readAsDataURL(uploadFile)
    fr.onload = (event:any)=>{
      this.adminProfile = event.target.result
      this.adminDetails.Profile = this.adminProfile
    }
  }

  cancel(){
    this.editAdminStatus = false
  }
  
  updateAdmin(){
   if(this.adminDetails.name && this.adminDetails.password){
    this.adminAPI.editAdminAPI(this.adminDetails).subscribe({
      next:(result:any)=>{
        this.editAdminStatus = false
        alert("Admin details updated successfully")
        sessionStorage.setItem("Admin",JSON.stringify(result))
        this.onAdminChange.emit(result.name)
      },
      error:(reason:any)=>{
        console.log(reason);
        alert("Updation failed... try after sometimes!!")
        
      }
    })
   }
    else
    {
      alert("Please fill the form completely")
    }
    
  }
 

}

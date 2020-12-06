import { Component,OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Login '; 
  username!: string;
  password!: string;
  constructor(){}
  ngOnInit() {}
  LoginUser()
 {
   if( this.username ==="shubham" && this.password ==="123")
   {
     console.log("login successful")
     
   }
   else{
     console.log("login failed");
     

   }
 }

}


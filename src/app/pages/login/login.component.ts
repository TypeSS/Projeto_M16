import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  info: object = {"email": "jonhenrilu@gmail.com", "password":"123"};

  constructor(private userlogin : LoginService){}
  testelogin(){
    this.userlogin.getLogin(this.info).subscribe((res)=>{
      console.log(res)
      localStorage.setItem('id:',res.id)
    }
  )}
}

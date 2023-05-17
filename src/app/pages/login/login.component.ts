import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";


  info: object = {"email": this.email, "password":this.password };

  constructor(private userlogin : LoginService, private router:Router){}
  testelogin(){

    this.info = {"email": this.email, "password":this.password };
    console.log(this.info);
    this.userlogin.getLogin(this.info).subscribe((res)=>{
      console.log(res)

      if (res.message = "Login realizado com sucesso"){
      localStorage.setItem('id',res.id)
      this.router.navigateByUrl('/home')
      }
    }
  )}
}

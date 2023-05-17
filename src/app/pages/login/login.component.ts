import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  verif : boolean = false;


  info: object = {"email": this.email, "password":this.password };

  constructor(private userlogin : LoginService, private router:Router, private messageService: MessageService){}
  testelogin(){

    this.info = {"email": this.email, "password":this.password };
    console.log(this.info);
    this.userlogin.getLogin(this.info).subscribe((res)=>{
      console.log(res)

      if (res.message == "Login realizado com sucesso"){
      localStorage.setItem('id',res.id)
      this.router.navigateByUrl('/home')
      this.verif = false;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Login realizado' });
      }
      else if (res.message == "Senha Errada"){
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Senha errada' });
          this.verif = true
      }
      else if (res.message == "Email não existe"){
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Email errado' });
        this.verif = true;
      }
    }
  )}
}

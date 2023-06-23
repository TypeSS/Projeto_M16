import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email?: string;
  password?: string;
  nome?: string;
  morada?: string;
  codPostal?: string;
  telefone?: number;
  cPass?: string;
  info?: object = {};

  constructor(private register: RegisterService) {}
  regUser() {
    this.info = {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      morada: this.morada,
      password: this.password,
      codPostal: this.codPostal,
    };

    if (this.info != undefined || this.info != null) {
      if (this.password == this.cPass) {
        this.register.regUser(this.info).subscribe((res) => {
          console.log(res.status)
        });
      }
    }
  }
}

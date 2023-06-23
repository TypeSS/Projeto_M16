import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users/users';
import { ClientesService } from 'src/app/services/users/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente = {
    nome: 'João da Silva',
    email: 'joao@example.com'
  };

  editingNome = false;
  editingEmail = false;

  userinfo: Users;
  nome:string;
  email:string;
  telefone:number;
  morada:string;
  codPostal:string;
  logado: boolean = false;

  constructor(private user:ClientesService){}

  ngOnInit() {
    this.user.getCliente().subscribe((res) => {
      const foundUser = res.find(a => a.id_utilizador == Number(localStorage.getItem("id")));
      if (foundUser) {
        this.userinfo = foundUser;
        this.nome = this.userinfo.nome;
        this.email = this.userinfo.email;
        this.telefone = this.userinfo.telefone;
        this.morada = this.userinfo.morada;
        this.codPostal = this.userinfo.codPostal;
      }
      console.log(this.nome)
    });


  }
}

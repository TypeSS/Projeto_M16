import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users/users';
import { ClientesService } from 'src/app/services/users/clientes.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cliModal = false;
  userinfo: Users;
  nome:string;
  email:string;
  telefone:number;
  morada:string;
  id:number;
  codPostal:string;
  logado: boolean = false;

  constructor(private user:ClientesService){}

  ngOnInit() {
    this.user.getCliente().subscribe((res) => {
      const foundUser = res.find(a => a.id_utilizador == Number(localStorage.getItem("id")));
      if (foundUser) {
        this.userinfo = foundUser;
        this.id = this.userinfo.id_utilizador
        this.nome = this.userinfo.nome;
        this.email = this.userinfo.email;
        this.telefone = this.userinfo.telefone;
        this.morada = this.userinfo.morada;
        this.codPostal = this.userinfo.codPostal;
      }
      console.log(this.nome)
    });


  }

  updateCliente(){

    this.userinfo = {
      'id_utilizador':this.id,
      'nome':this.nome,
      'email':this.email,
      'telefone':this.telefone,
      'morada':this.morada,
      'codPostal':this.codPostal
    }
    this.user.updateCliente(this.userinfo).subscribe((res)=>{
      console.log("sucesso?")
    })
    this.cliModal = false;
  }



}

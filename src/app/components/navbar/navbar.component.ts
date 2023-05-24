import { Component, Input, OnInit } from '@angular/core';
import { UseractionService } from 'src/app/services/useraction/useraction.service';
import { MenuItem } from 'primeng/api';


export interface IsActiveMatchOptions {
  matrixParams: 'exact'|'subset'|'ignored';
  queryParams: 'exact'|'subset'|'ignored';
  paths: 'exact'|'subset';
  fragment: 'exact'|'ignored';
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  verif: boolean = false;
  items: MenuItem[];

constructor (private useraction: UseractionService){}

ngOnInit() {
this.verif = this.useraction.verifyUser()

if (this.verif == false){
this.items = [
  {
      label: 'Log in',
      icon: 'pi pi-sign-in',
      routerLink:'/login',
  },
  {
    label:'Criar Conta',
    icon: 'pi pi-plus',
    routerLink:'/register'
  }
]
}
else{
  this.items = [
    {
        label: 'Ver perfil',
        icon: 'pi pi-user',
    },
    {
      label:'Terminar Sessão',
      icon: 'pi pi-sign-out',
      command: ()=>{
        this.useraction.logOut();
        window.location.reload();
      }
    }
  ]
}
}

logOut(){
  this.useraction.logOut()
}
}

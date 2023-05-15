import { Component, Input } from '@angular/core';

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


export class NavbarComponent {
teste: boolean = false;
 
public linkActiveOptions: IsActiveMatchOptions = {
  matrixParams: 'exact',
  queryParams: 'exact',
  paths: 'exact',
  fragment: 'exact',
};


teste1(){
  this.teste = !this.teste
}
}

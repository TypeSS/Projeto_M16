import { Component, Input, OnInit } from '@angular/core';
import { UseractionService } from 'src/app/services/useraction/useraction.service';

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

constructor (private useraction: UseractionService){}

ngOnInit() {
this.verif = this.useraction.verifyUser()
}

logOut(){
  this.useraction.logOut()
}
}

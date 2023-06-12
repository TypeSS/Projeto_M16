import { Component, Input } from '@angular/core';
import { UseractionService } from 'src/app/services/useraction/useraction.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() nome: string;

  constructor (private useraction: UseractionService){}
logOut(){
  this.useraction.logOut()
}
}

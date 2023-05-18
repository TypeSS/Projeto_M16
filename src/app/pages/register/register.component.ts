import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
steps: MenuItem[] = [];

ngOnInit() {
this.steps = [{
  label:"Informação Pessoal"
},
{
  label:"Contacto & Endereço"
}
]
}


}

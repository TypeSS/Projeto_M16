import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {

  @Input() nome:string = "";
  @Input() localidade:string = "";
  @Input() morada:string = ""
  @Input() corbg:string = "";

}

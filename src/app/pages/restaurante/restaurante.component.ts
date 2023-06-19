import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
  listarest: Restaurante[];

  constructor(private restaurantes:RestauranteService){}

  ngOnInit(){
    this.restaurantes.getRestaurantes().subscribe((res)=>{
      this.listarest = res;
    })
  }
}

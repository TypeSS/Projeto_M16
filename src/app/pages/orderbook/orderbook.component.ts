import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';


@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent implements OnInit {
  data: string;
  hora: string;
  resinfo: object;
  listarest: Restaurante[];
  selectedRes: Restaurante;

  constructor(private restaurantes:RestauranteService){}

  ngOnInit(){
    this.restaurantes.getRestaurantes().subscribe((res)=>{
      this.listarest = res;
      console.log(this.listarest);
    })
  }

Reservas() {
}
}

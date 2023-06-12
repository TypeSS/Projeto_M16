import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Reserva, Restaurante } from 'src/app/models/Restaurante/restaurante';
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
  nPessoas: number;
  obs: string;
  selectedRes: Restaurante;
  id:string;
  constructor(private restaurantes:RestauranteService){}

  ngOnInit(){
    this.restaurantes.getRestaurantes().subscribe((res)=>{
      this.listarest = res;
      console.log(this.listarest);
    })

  }

Reservas() {
  this.id = localStorage.getItem('id') || "";




  this.resinfo = {
    "id_restaurante": Number(this.selectedRes.id_restaurante),
    "id_utilizador": Number(this.id),
    "data":this.data,
    "horas":this.hora,
    "observacoes":this.obs,
    "nPessoas":this.nPessoas,
  }

  
  console.log(this.resinfo)


  this.restaurantes.criarRes(this.resinfo).subscribe();
}
}

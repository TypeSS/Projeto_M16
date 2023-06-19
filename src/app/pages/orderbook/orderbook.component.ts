import { Time } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Reserva, Restaurante } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { UseractionService } from 'src/app/services/useraction/useraction.service';


@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent implements OnInit {

  data: string;
  hora: string = '00:00';
  resinfo: object;
  listarest: Restaurante[];
  nPessoas: number;
  obs: string;
  selectedRes: Restaurante;
  id:string;
  logado:boolean = false;
  constructor(private restaurantes:RestauranteService, private useraction:UseractionService){}

  ngOnInit(){
    this.restaurantes.getRestaurantes().subscribe((res)=>{
      this.listarest = res;
    })

    this.logado = this.useraction.verifyUser()


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

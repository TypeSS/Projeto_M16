import { Component, OnInit } from '@angular/core';
import { ResCli, Restaurante } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';

@Component({
  selector: 'app-reservas-c',
  templateUrl: './reservas-c.component.html',
  styleUrls: ['./reservas-c.component.css']
})
export class ReservasCComponent implements OnInit{

  rescli: ResCli[] = [];
  restaurantes:Restaurante[];

  constructor(private resinfo: RestauranteService){}

  ngOnInit() {
    this.resinfo.getResCli(Number(localStorage.getItem("id"))).subscribe((res)=>{
      this.rescli = res;
      console.log(this.resinfo);
    })

    this.resinfo.getRestaurantes().subscribe((res)=>{
      this.restaurantes = res
    })
  }

  estadoReserva(estado: any){
    switch(estado){
      case 'Pendente':
        return 'warning';
      case 'Aceite':
        return 'success';
      case 'Cancelada':
        return 'danger'
      default:
        return 'erro';
    }
  }

  teste(teste:Restaurante){

    console.log(teste.nome_restaurante)
  }
}

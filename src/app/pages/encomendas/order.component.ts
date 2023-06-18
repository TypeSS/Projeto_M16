import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AES, enc } from 'crypto-js';
import { async, switchMap } from 'rxjs';
import { Restaurante } from 'src/app/models/Restaurante/restaurante';
import { Encomenda, ProdEnc } from 'src/app/models/produtos/produtos';
import { Users } from 'src/app/models/users/users';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { ClientesService } from 'src/app/services/users/clientes.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
encDec:string;
encInfo: Encomenda;
items:ProdEnc[];
listarest: Restaurante[];
selectedRes: Restaurante;
infoCliente:Users;
morada:string;
nome:string;
telefone:number;
precoComida:number;
fee:number;
precoTotal:number;



  constructor(private carrinho:CarrinhoService, private restaurantes:RestauranteService, private clientService: ClientesService) { }


   ngOnInit() {

    if(localStorage.getItem('encomenda') != undefined || localStorage.getItem('encomenda') != null ){
    this.encDec = AES.decrypt(localStorage.getItem('encomenda')!,'123').toString(enc.Utf8)
    this.encInfo = JSON.parse(this.encDec)
    }
    else{
      console.log("123")
    }


  this.clientService.getCliente()
    .subscribe((res) => {
      const foundUser = res.find(a => a.id_utilizador == Number(localStorage.getItem("id")));
      if (foundUser) {
        this.infoCliente = foundUser;
        this.morada = this.infoCliente.morada;
        this.nome = this.infoCliente.nome;
        this.telefone = this.infoCliente.telefone
      }
    });

      this.restaurantes.getRestaurantes().subscribe((res)=>{
      this.listarest = res;
    })

    this.items = this.carrinho.getCartItems();

    this.precoComida = this.items.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

    if(this.encInfo.tipoEnc == "Entrega"){
      this.fee = 2
    }
    else{
      this.fee = 0;
    }

    this.precoTotal = this.fee + this.precoComida;
  }


  Encomendar(){
    console.log(this.encInfo);
    console.log(this.items);

    this.restaurantes.criarEnc(this.encInfo)
  .pipe(
    switchMap(() => this.restaurantes.prodEnc(this.items))
  )
  .subscribe();
}
}

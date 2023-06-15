import { Component, Input } from '@angular/core';
import { ProdEnc, Produtos } from 'src/app/models/produtos/produtos';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component {
@Input() produto:Produtos;
ProdEnc: ProdEnc;
constructor(private carrinho: CarrinhoService){}
onClick(){

  this.ProdEnc = {
    "nomeproduto":this.produto.nomeproduto,
    "preco":this.produto.preco,
    "quantidade":1
  }
  this.carrinho.addToCart(this.ProdEnc)
}
}

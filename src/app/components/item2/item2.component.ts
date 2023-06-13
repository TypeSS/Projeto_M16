import { Component, Input } from '@angular/core';
import { Produtos } from 'src/app/models/produtos/produtos';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component {
@Input() produto:Produtos;

constructor(private carrinho: CarrinhoService){}
onClick(){
  this.carrinho.addToCart(this.produto)
}
}

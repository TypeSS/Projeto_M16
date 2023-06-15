import { Injectable } from '@angular/core';
import { ProdEnc, Produtos } from 'src/app/models/produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
private items: any[] = [];
  constructor() { }

  addToCart(item:ProdEnc){
    const existingItem = this.items.find((i) => i.nomeproduto === item.nomeproduto);

    if (existingItem) {
      existingItem.quantidade += 1;
    } else {
      item.quantidade = 1;
      this.items.push(item);
    }
  }



  removeFromCart(item: any) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getCartItems() {
    return this.items;
  }
}

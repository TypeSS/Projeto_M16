import { Injectable } from '@angular/core';
import { Produtos } from 'src/app/models/produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
private items: any[] = [];
  constructor() { }

  addToCart(item:Produtos){
    this.items.push(item);
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

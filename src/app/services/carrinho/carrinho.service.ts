import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
private items: any[] = [];
  constructor() { }

  addToCart(item:any){
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

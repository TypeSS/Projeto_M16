import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProdEnc, Produtos } from 'src/app/models/produtos/produtos';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Categoria } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { SlicePipe } from '@angular/common';



@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  providers:[SlicePipe]
})


export class PedidoComponent implements OnInit {
  currentPage:number = 1;
  produtos: Produtos[];
  categorias: Categoria[];
  cartItem:ProdEnc[];
  sortVerif:boolean = true;
  selectedIndex: number = -1;
  rows:number = 3;
  first:number = 3;

  constructor(private prodinfo: ProdutosService, private infocategorias: RestauranteService, private carrinho: CarrinhoService){}


  ngOnInit() {
    this.infocategorias.getCategoria().subscribe((res)=>{
      this.categorias = res;
    })

    this.prodinfo.getProdutospCategoria(1).subscribe((res)=>{
      this.produtos = res
})

this.cartItem = this.carrinho.getCartItems()

  }

  ProdutosCat(id_categoria:number){
    this.prodinfo.getProdutospCategoria(id_categoria).subscribe((res)=>{
      this.produtos = res
      console.log(this.produtos)
    })
    this.selectedIndex = id_categoria
    this.sortVerif = false;
  }

  Produtos(){
    this.prodinfo.getProdutos().subscribe((res)=>{
      this.produtos = res;
      console.log(this.produtos)
    })
    this.sortVerif= true;
    this.selectedIndex = -1;
  }

  RemoveItem(item:any){
    this.carrinho.removeFromCart(item);
    console.log(this.cartItem.length)
  }


  updateCartItem(item: any) {
    if (this.cartItem.includes(item)) {
      // If the item already exists in the cartItem list, increase the quantity by 1
      item.quantity += 1;
    }
  }

  onPageChange(event: any) {

      this.currentPage = event.page + 1;
  }
}

import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Encomenda, ProdEnc, Produtos } from 'src/app/models/produtos/produtos';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Categoria, Restaurante } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AES } from 'crypto-js';

interface tipo{
  tipo:string
}

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
  listarest: Restaurante[];
  selectedRes: Restaurante;
  hoje:string;
  EncCripto:string;
  tipos: tipo[] =
  [{"tipo":"Entrega"}, {"tipo":"Levantamento"}];



  tipoEnc:tipo;

  Encomenda: Encomenda;

  constructor(private prodinfo: ProdutosService, private infocategorias: RestauranteService, private router: Router, private restaurantes:RestauranteService, private carrinho: CarrinhoService){}


  ngOnInit() {
    this.infocategorias.getCategoria().subscribe((res)=>{
      this.categorias = res;
    })

    this.restaurantes.getRestaurantes().subscribe((res)=>{
      this.listarest = res;
      console.log(this.listarest);
    })

this.Produtos()
this.cartItem = this.carrinho.getCartItems()

  }

  ProdutosCat(id_categoria:number){
    this.prodinfo.getProdutospCategoria(id_categoria).subscribe((res)=>{
      this.produtos = res
    })
    this.selectedIndex = id_categoria
    this.sortVerif = false;
  }

  Produtos(){
    this.prodinfo.getProdutos().subscribe((res)=>{
      this.produtos = res;
    })
    this.sortVerif= true;
    this.selectedIndex = -1;
  }

  RemoveItem(item:any){
    this.carrinho.removeFromCart(item);
  }


  updateCartItem(item: any) {
    if (this.cartItem.includes(item)) {
      item.quantity += 1;
    }
  }

  onPageChange(event: any) {

      this.currentPage = event.page + 1;
  }

  Encomendar(){
    this.Encomenda = {
      "id_utilizador":Number(localStorage.getItem("id")),
      "id_restaurante":this.selectedRes.id_restaurante,
      "tipoEnc":this.tipoEnc.tipo,
      "estado":"Em preparação",
      "precototal":0
    }

    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };

    this.hoje = today.toLocaleDateString('pt-PT',options).split(',')[0];




    this.EncCripto = AES.encrypt(JSON.stringify(this.Encomenda), '123').toString();
    localStorage.setItem('encomenda',this.EncCripto);

    console.log(this.hoje)

  }
}

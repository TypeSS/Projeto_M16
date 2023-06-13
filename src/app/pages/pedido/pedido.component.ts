import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos/produtos';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Categoria } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
export interface IsActiveMatchOptions {
  matrixParams: 'exact'|'subset'|'ignored';
  queryParams: 'exact'|'subset'|'ignored';
  paths: 'exact'|'subset';
  fragment: 'exact'|'ignored';
}
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
 

export class PedidoComponent implements OnInit {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  verif: boolean = true; // Definindo a propriedade 'verif' como booleana
  isMenuHidden: boolean = true; // Variável para controlar a exibição do menu

  // Função para alternar a exibição do menu
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  produtos: Produtos[];
  categorias: Categoria[];
  teste:any;

  constructor(private prodinfo: ProdutosService, private infocategorias: RestauranteService, private carrinho: CarrinhoService){}


  ngOnInit() {



    this.infocategorias.getCategoria().subscribe((res)=>{
      this.categorias = res;
    })

    this.prodinfo.getProdutospCategoria(1).subscribe((res)=>{
      this.produtos = res
})

  }

  ProdutosCat(id_categoria:number){
    this.prodinfo.getProdutospCategoria(id_categoria).subscribe((res)=>{
      this.produtos = res
      console.log(this.produtos)
    })

    this.teste = this.carrinho.getCartItems();
    console.log(this.teste)
  }

  Produtos(){
    this.prodinfo.getProdutos().subscribe((res)=>{
      this.produtos = res;
    })
  }
}

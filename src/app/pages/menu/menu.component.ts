import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Produtos } from 'src/app/models/produtos/produtos';
import { Categoria } from 'src/app/models/Restaurante/restaurante';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';

export interface IsActiveMatchOptions {
  matrixParams: 'exact'|'subset'|'ignored';
  queryParams: 'exact'|'subset'|'ignored';
  paths: 'exact'|'subset';
  fragment: 'exact'|'ignored';
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  @ViewChildren('sorter')
  sorter: HTMLElement;

  sortVerif:boolean = true;
  produtos: Produtos[];
  categorias: Categoria[];

  selectedIndex: number = -1;

  constructor(private prodinfo: ProdutosService, private infocategorias: RestauranteService){}



  ngOnInit() {

    this.Produtos();
    this.infocategorias.getCategoria().subscribe((res)=>{
      this.categorias = res;
    })
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
}

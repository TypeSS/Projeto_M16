import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Produtos } from 'src/app/models/produtos/produtos';
import { Categoria } from 'src/app/models/Restaurante/restaurante';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { UseractionService } from 'src/app/services/useraction/useraction.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  @ViewChildren('sorter')
  sorter: HTMLElement;

  sortVerif:boolean = true;
  produtos: Produtos[];
  categorias: Categoria[];
  logado:boolean = false;

  selectedIndex: number = -1;

  constructor(private prodinfo: ProdutosService, private infocategorias: RestauranteService, private useraction:UseractionService){}



  ngOnInit() {

    this.Produtos();
    this.infocategorias.getCategoria().subscribe((res)=>{
      this.categorias = res;
    })


    this.logado = this.useraction.verifyUser();

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

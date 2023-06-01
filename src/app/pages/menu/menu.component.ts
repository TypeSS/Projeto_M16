import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Produtos } from 'src/app/models/produtos/produtos';
import { Categoria } from 'src/app/models/Restaurante/restaurante';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('sorter')
  sorter:HTMLElement;

  produtos: Produtos[];
  categorias: Categoria[];

  classe: string;

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

  this.classe = "bg-yellow-500"
}

Produtos(){
  this.prodinfo.getProdutos().subscribe((res)=>{
    this.produtos = res;
  })
}
}

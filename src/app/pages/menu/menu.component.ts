import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos/produtos';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  produtos: Produtos[];

  constructor(private prodinfo: ProdutosService){}



  ngOnInit() {
    this.prodinfo.getProdutos().subscribe((res:Produtos[])=>{
      this.produtos = res;
    })
}
}

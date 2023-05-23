import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos/produtos';
import { Users } from 'src/app/models/users/users';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { ClientesService } from 'src/app/services/users/clientes.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  prodinfo: Produtos[];
  clientInfo: Users[];
  constructor(private produtos: ProdutosService, private clientes: ClientesService){}
  ngOnInit() {
    this.produtos.getProdutos().subscribe((res)=>{
      this.prodinfo = res
    })

    this.clientes.getCliente().subscribe((res)=> {
      this.clientInfo = res
    })
  }
}

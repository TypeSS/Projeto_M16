import { Component, Input } from '@angular/core';
import { Produtos } from 'src/app/models/produtos/produtos';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

@Input() titulo:string;
@Input() preco:number;
@Input() descricao:string;
}


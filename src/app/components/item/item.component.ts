import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
@Input() itemImg: string = "";
@Input() Title:string = "";
@Input() Descricao:string = "";
@Input() Preco: string = "";
}

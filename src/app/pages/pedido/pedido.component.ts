import { transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent {
  verif: boolean = true; // Definindo a propriedade 'verif' como booleana
  isMenuHidden: boolean = true; // Variável para controlar a exibição do menu

  // Função para alternar a exibição do menu
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

}

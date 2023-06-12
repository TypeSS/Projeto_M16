import { transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent {
  isMenuOpen = false;

  links = [
    { label: 'Home', url: '/home' },
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Contact', url: '/contact' },
  ];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  
    // Adicionar ou remover a classe "fade-in" nos links
    const navLinks = document.querySelectorAll('.nav-links ul li');
    navLinks.forEach((link) => {
      link.classList.toggle('fade-in');
    });
  }
  
}

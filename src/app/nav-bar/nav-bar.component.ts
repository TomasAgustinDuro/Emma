import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isSticky = false;

  // Con hostListener puedo escuchar el evento, en este caso scroll y en este caso se llama a la funcion OnScroll
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Revista la posicion scrolleada y en base a eso cambia el valor de isSticky
    if (window.scrollY > 470) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}

import { Component, Inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-seccion-cuatro',
  templateUrl: './seccion-cuatro.component.html',
  styleUrls: ['./seccion-cuatro.component.css'],
})
export class SeccionCuatroComponent {
  // Se inyecta el padre para poder utilizar sus metodos
  constructor(@Inject(AppComponent) private padre: AppComponent) {}

  // se crea un metodo para el hijo y se llama al metodo original del padre.
  resetearScrollHijo(): void {
    this.padre.resetearScrollPosicion();
  }
}

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0 })), // Estado inicial
  transition(':enter, :leave', [
    // Transiciones para entrar y salir
    animate('1000ms ease-in-out', style({ opacity: 1 })), // Animación de fadeIn suave y progresivo
  ]),
]);

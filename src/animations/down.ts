import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const caida = trigger('caida', [
  state('void', style({ transform: 'translateY(-10px)', opacity: 0 })), // Estado inicial
  transition(':enter', [
    animate('1000ms ease', style({ transform: 'translateY(0)', opacity: 1 })), // Transición de entrada
  ]),
]);

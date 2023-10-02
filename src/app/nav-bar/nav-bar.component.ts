import { Component, HostListener } from '@angular/core';
import 'bootstrap/dist/js/bootstrap';
import { caida } from 'src/animations/down';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [caida],
})
export class NavBarComponent {}

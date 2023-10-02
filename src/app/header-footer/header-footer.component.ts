import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';
import { caida } from '../../animations/down';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css'],
  animations: [fadeIn, caida],
})
export class HeaderFooterComponent implements OnInit {
  constructor() {}

  title: String = 'Emma';

  ngOnInit(): void {
    this.resetearScrollPosicion();
  }

  resetearScrollPosicion(): void {
    window.scrollTo(0, 0);
  }
}

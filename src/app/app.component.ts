import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stella-web';

  resetearScrollPosicion() {
    window.scrollTo(0, 0);
  }
}

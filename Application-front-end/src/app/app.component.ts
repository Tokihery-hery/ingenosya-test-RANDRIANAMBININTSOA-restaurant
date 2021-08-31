import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animations/animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Application-front-end';
  prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
}
}

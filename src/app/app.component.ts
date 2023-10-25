import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<a [routerLink]="['admin']">link</a><br>
  <a [routerLink]="['sign']">sign</a>
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'curso-de-angular-auth-front';
}

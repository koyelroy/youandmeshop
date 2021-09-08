import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/1200/300`);
}

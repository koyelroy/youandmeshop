import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand-sm bg-dark navbar-dark'>
        <a class='navbar-brand'>
        <img src="./assets/images/logo.jpg"
        class="img-responsive rounded"
        style="max-height:90px;padding-bottom:10px" />
        </a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/wishlist'>My WishList</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/cart'>My Cart</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'You and Me Shop';
}

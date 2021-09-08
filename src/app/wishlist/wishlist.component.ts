import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../products/product';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'pm-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistArr: any[] = [];
  user: string = '';
  sub: any;
  products: any;
  errorMessage = '';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  
  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit(): void {
    let resObj = this.ps.getWishList();
    this.user = resObj['user'];
    this.wishlistArr = resObj['products']; // wishlist ids

    this.sub = this.ps.getProducts().subscribe({
      next: products => {
        this.filterProducts(products, this.wishlistArr);
        // this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }

  filterProducts(products: any[], wishlistids: any[]) {
    this.products = products.filter((data)=> {
      if (wishlistids.includes(data.productId)) {
        return true;
      } else {
        return false;
      }
    })
  }

  moveToCart(pId: any, quantity: any) {
    console.log("Before moving to cart", pId, quantity);
    if (+quantity === 0) {
      alert("Please select quantity before proceeding");
    } else {
      this.router.navigate(['/cart']);
    }
  }

}

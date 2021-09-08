import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';



@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;
  isSelect: boolean = false;
  subscription: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const wishData = this.productService.getWishList();
    console.log(id, wishData);
    if (wishData && wishData['products'] && wishData['products'].includes(id)) {
      this.isSelect = true;
    }
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.subscription = this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  changeSelection(pId?:any) {
    let data = this.productService.getWishList();
    
    if (data && data['products'] && data['products'].length > 0) {
      let tmp = data['products']; 
      if (tmp.includes(pId)) {
        let index = tmp.indexOf(pId);
        if (index !== -1) {
          tmp.splice(index, 1);
          console.log("TMP", tmp);
        }
      } else {
        tmp.push(pId);
      }
      data['products'] = tmp;
      console.log(tmp, data['products']);
      this.productService.setWishList(data['products']);
    } else {
      this.productService.setWishList([pId]);
    }


    // Button Select Deselect
    this.isSelect = !this.isSelect;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

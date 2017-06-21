import { Component } from '@angular/core';
import { IProduct, Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  providers: [ProductService],
  template: `<div>
    <nav>
      <a>Navigation:</a>
      <ul>
        <li><a [routerLink]="['home']">Home</a></li>
        <li><a [routerLink]="['/appcom']">Login</a></li>
        <li><a [routerLink]="['/appcom1']">Form</a></li>
      </ul>
    </nav>
    <table><tbody><tr *ngFor='let item of iproducts'><td>{{item.ProductID}}</td><td>{{item.ProductName}}</td></tr></tbody></table>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent  {
  name = 'World....';
  iproducts: IProduct[]; 
   constructor(private _product: ProductService){ 
   } 
   ngOnInit() : void { 
      this._product.getJSON() 
      .subscribe(iproducts => this.iproducts = iproducts); 
   } 
}

@Component({
  selector: 'product-form',
  templateUrl: `./form.component.html`,
})
export class AppComponent1  {
  private _route:Router;
  model = new Product(1,'ProductA');
  onBack(): void{
    this._route.navigate(['/appcom']);
  }

  /*submitForm(data:object){
    console.log("hello there...", data);
  }*/
}

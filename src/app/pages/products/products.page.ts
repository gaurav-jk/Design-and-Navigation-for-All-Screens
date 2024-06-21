import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: Observable<any> = new Observable<any>();
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.products = this.http.get('https://fakestoreapi.com/products');
  }
}

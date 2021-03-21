import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResposeModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "https://localhost:44390/api/";

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResposeModel<Product>> {
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResposeModel<Product>>(newPath);
  }

  getProductsByCategoryId(categoryId: number): Observable<ListResposeModel<Product>> {
    let newPath = this.apiUrl + "products/getallbycategoryid?categoryId=" + categoryId;
    return this.httpClient.get<ListResposeModel<Product>>(newPath);
  }
}

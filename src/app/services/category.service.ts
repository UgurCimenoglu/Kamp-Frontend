import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResposeModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = "https://localhost:44390/api/category/getall";

  getCategories(): Observable<ListResposeModel<Category>> {
    return this.httpClient.get<ListResposeModel<Category>>(this.apiUrl);
  }
}

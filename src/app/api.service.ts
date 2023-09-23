import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Featured } from './featured';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://localhost/Zay/api";
	constructor(private httpClient: HttpClient) {}
	readProduct(): Observable<Product[]>{
		return this.httpClient.get<Product[]>(`${this.PHP_API_SERVER}/product.php`);
	}
	readFeatured(): Observable<Featured[]>{
		return this.httpClient.get<Featured[]>(`${this.PHP_API_SERVER}/featured.php`);
	}
}

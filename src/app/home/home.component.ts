import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public Products?: Product[];

  constructor(private apiService: ApiService){
    this.apiService.readProduct().subscribe((Products: Product[])=>{
      this.Products = Products;
    })
  }
}

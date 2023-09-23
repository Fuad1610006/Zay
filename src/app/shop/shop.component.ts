import { Component } from '@angular/core';
import { Featured } from '../featured';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  public Featured?: Featured[];

  constructor(private apiService: ApiService){
    this.apiService.readFeatured().subscribe((Featured: Featured[])=>{
      this.Featured = Featured;
    })
  }
}

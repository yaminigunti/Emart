import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../services/buyer.service';
import { Buyer } from '../models/buyer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Buyer[];

  constructor(private contServ:BuyerService) { }

  ngOnInit() {
    this.products=this.contServ.getAll();
  }
  delete(productId:number){
    if(confirm(`Are you sure of deleting product#${productId}`)){
  }
}

}

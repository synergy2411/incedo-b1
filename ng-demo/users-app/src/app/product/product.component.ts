import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id : number;
  productName : string;
  bookID : number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.productName = params['product_name'];
    })

    this.route.queryParams.subscribe(params => {
      this.bookID = params['book_id'];
    })
  }

}

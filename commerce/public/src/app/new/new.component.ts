import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct:any;
  products = [];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newProduct = {name: '', qty:'', price:'', img:''};
  }
  addProd(){
    console.log('Received ' +this.newProduct.name+ ', ' +this.newProduct.qty + ', '+this.newProduct.price + ', and' +this.newProduct.img +' url from product in new.html');

    var tempObservable = this._httpService.newProd(this.newProduct);

    tempObservable.subscribe((data:any)=>{
      console.log('received product data from DB', data);
      this.products = data;
      this._router.navigate(['/products']);
    })
  }
  getProd(){
    console.log('getProd invoked by homepage');
    var tempObservable = this._httpService.getProd();
    tempObservable.subscribe((data:any)=>{
      console.log('got data', data);
      this.products = data;
    })
  }
}

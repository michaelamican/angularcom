import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
// import { getCurrentSanitizer } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title="CartMe";
  newProduct = {_id: '', name: '', qty: '', price: '', img: ''};
  products = [];

  constructor(private _httpService: HttpService, private _router:Router) { }

  ngOnInit() {
    console.log('onInit in home component');
    this.getProd();
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

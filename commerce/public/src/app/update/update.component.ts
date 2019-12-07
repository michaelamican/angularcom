import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  title="CartMe";
  product = {_id:'', name: '', qty: '', price: '', img: ''};
  products = [];

  constructor(private _httpService:HttpService, private _router:Router, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.pullProd();
  }

  pullProd(){
    this._route.params.subscribe((data)=>{
      var id = data.id;
      console.log('Product id is: ', id );
      var tempObservable = this._httpService.findProd(id);
      tempObservable.subscribe((data:any)=>{
        console.log('got a response from findProd', data);
        this.product = data;
     })
    })
  }

  fixProd(){
    console.log('fixProd invoked by update component');
    var tempObservable = this._httpService.updateProd(this.product._id, this.product);
    tempObservable.subscribe((data:any)=>{
      console.log('got data', data);
      this._router.navigate(['/']);
    })
  }
  reset(){
    console.log('reset');
    this.ngOnInit();
  }
}
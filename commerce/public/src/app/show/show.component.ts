import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  title="CartMe";
  products = {_id:'', name: '', qty: '', price: '', img: ''};
  product = [];

  constructor(private _httpService: HttpService, private _route:ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log('onInit in show component');
    this._route.params.subscribe((params)=>{
      var id=params.id;
      var tempObservable = this._httpService.findProd(id);
      tempObservable.subscribe((data:any)=>{
        this.product = data;
        console.log('Data received by show OnInit was: ', data);
      })
    })
  }
  nixProd(id){
    console.log('nixProd invoked by show');
    var tempObservable = this._httpService.nixProd(id);
    tempObservable.subscribe((data:any)=>{
    console.log('got data', data);
    this._router.navigate(['/products'])
    })
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'products/new', component: NewComponent},
  {path: 'products/:id', component: ShowComponent},
  {path: 'products/:id/edit', component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

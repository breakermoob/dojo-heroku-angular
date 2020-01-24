import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path:'home', component: HomeComponent },
  { path:'detail', component: ProductDetailComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

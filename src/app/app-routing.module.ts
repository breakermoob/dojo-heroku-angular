import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ShopingCarComponent } from "./components/shoping-car/shoping-car.component";
import { SuccessfulComponent } from "./components/successful/successful.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "detail", component: ProductDetailComponent },
  { path: "shoping-car", component: ShopingCarComponent },
  { path: "successful", component: SuccessfulComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

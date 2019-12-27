import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { DetalheComponent } from "./pages/detalhe/detalhe.component";
const routes: Routes = [
 {
 path: "",
 component: HomeComponent,
 pathMatch: "full"
 },
 {
 path: "detalhe/:contatoId",
 component: DetalheComponent
 },
 {
 path: "**",
 component: HomeComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

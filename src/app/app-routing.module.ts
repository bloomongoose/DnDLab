
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutsComponent } from './donuts/donuts.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';

const routes: Routes = [
  { path: "donuts", component: DonutsComponent },
  { path: "donuts/:id", component: DonutDetailComponent },
  { path: "devs", component: FamousPeopleComponent },
  { path: "", redirectTo: "/donuts", pathMatch: "full" },
  { path: "**", redirectTo: "/donuts", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

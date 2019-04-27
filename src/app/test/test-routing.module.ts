import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: "material",
    loadChildren: "./material/material.module#MaterialModule"
  },
  { path: "", component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}

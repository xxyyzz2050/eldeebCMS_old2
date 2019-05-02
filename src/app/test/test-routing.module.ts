import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: "angular",
    loadChildren: "./angular-core/angular-core.module#AngularCoreModule"
  },
  {
    path: "material",
    loadChildren: "./material/material.module#MaterialModule"
  },
  {
    path: "formly",
    loadChildren: "./formly/formly.module#FormlyExampleModule"
  },
  { path: "", component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}

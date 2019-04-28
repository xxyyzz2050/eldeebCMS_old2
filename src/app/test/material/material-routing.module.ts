import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TypographyComponent } from "./typography/typography.component";
import { MaterialComponent } from "./material.component";
import { ElevationComponent } from "./elevation/elevation.component";
import { FormsComponent } from "./forms/forms.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LayoutComponent } from "./layout/layout.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ModalsComponent } from "./modals/modals.component";
import { TablesComponent } from "./tables/tables.component";

const routes: Routes = [
  {
    path: "typography",
    component: TypographyComponent
  },
  {
    path: "elevation",
    component: ElevationComponent
  },
  {
    path: "forms",
    component: FormsComponent
  },
  {
    path: "navigation",
    component: NavigationComponent
  },
  {
    path: "layout",
    component: LayoutComponent
  },
  {
    path: "buttons",
    component: ButtonsComponent
  },
  {
    path: "modals",
    component: ModalsComponent
  },
  {
    path: "tables",
    component: TablesComponent
  },
  {
    path: "",
    component: MaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule {}

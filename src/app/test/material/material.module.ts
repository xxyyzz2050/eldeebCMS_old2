import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialRoutingModule } from "./material-routing.module";
import { TypographyComponent } from "./typography/typography.component";
import { MaterialComponent } from "./material.component";
import { ElevationComponent } from "./elevation/elevation.component";
import { FormsComponent } from './forms/forms.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalsComponent } from './modals/modals.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [TypographyComponent, MaterialComponent, ElevationComponent, FormsComponent, NavigationComponent, LayoutComponent, ButtonsComponent, ModalsComponent, TablesComponent],
  imports: [CommonModule, MaterialRoutingModule]
})
export class MaterialModule {}

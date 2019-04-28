import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialRoutingModule } from "./material-routing.module";
import { TypographyComponent } from "./typography/typography.component";
import { MaterialComponent } from "./material.component";
import { ElevationComponent } from "./elevation/elevation.component";
import { FormsComponent } from "./forms/forms.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LayoutComponent } from "./layout/layout.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ModalsComponent } from "./modals/modals.component";
import { TablesComponent } from "./tables/tables.component";

import {
  MatAutocompleteModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatRadioModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatListModule,
  MatGridListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TypographyComponent,
    MaterialComponent,
    ElevationComponent,
    FormsComponent,
    NavigationComponent,
    LayoutComponent,
    ButtonsComponent,
    ModalsComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule
  ]
})
export class MaterialModule {}

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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BottomSheetComponent } from "./modals/bottom-sheet/bottom-sheet.component";
import { DialogComponent } from "./modals/dialog/dialog.component";
import { SnackBarComponent } from "./modals/snack-bar/snack-bar.component";

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
  MatButtonToggleModule,
  MatExpansionModule,
  MatListModule,
  MatGridListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
  MatBadgeModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRippleModule,
  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";

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
    TablesComponent,
    BottomSheetComponent,
    DialogComponent,
    SnackBarComponent
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
    MatButtonToggleModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  entryComponents: [BottomSheetComponent, DialogComponent, SnackBarComponent] // to avoid error: 'No component factory found for ...'; dynamically loaded components must be included in entryComponents; https://material.angular.io/components/bottom-sheet ; https://stackoverflow.com/a/53634939/9474643
})
export class MaterialModule {}

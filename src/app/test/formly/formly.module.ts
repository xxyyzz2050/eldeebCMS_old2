import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormlyRoutingModule } from "./formly-routing.module";
import { IndexComponent } from "./index/index.component";

import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FormlyRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ]
})
export class FormlyExampleModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularCoreRoutingModule } from "./angular-core-routing.module";
import { IndexComponent } from "./index/index.component";
import { TestService } from "./test.service";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, AngularCoreRoutingModule],
  providers: [TestService]
})
export class AngularCoreModule {}

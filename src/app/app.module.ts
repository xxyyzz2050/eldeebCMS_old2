//todo: EldeebModule,EldeebService was impoeted from dist, import them from src i.e: projects/eldeeb/src/..

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorComponent } from "./error/error.component";
import { EldeebModule } from "eldeeb";
import { EldeebService } from "eldeeb";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GestureConfig } from "@angular/material";
import { HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    EldeebModule,
    BrowserAnimationsModule
  ],
  providers: [
    EldeebService, //eldeeb/index now is not a service
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public eldeebService: EldeebService) {
    console.log("*** AppModule started ***");
    eldeebService.test();
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorComponent } from "./error/error.component";
import { EldeebModule } from "eldeeb";
import { EldeebService } from "eldeeb";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    EldeebModule,
    BrowserAnimationsModule
  ],
  providers: [EldeebService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public eldeebService: EldeebService) {
    console.log("*** AppModule started ***");
    eldeebService.test();
  }
}

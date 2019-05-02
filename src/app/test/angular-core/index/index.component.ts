import { Component, OnInit } from "@angular/core";
import { TestService } from "../test.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  constructor(private ts: TestService) {}

  ngOnInit() {
    //  this.ts.test();
  }
}

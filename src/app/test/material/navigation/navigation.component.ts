import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  mode = new FormControl("over");
}

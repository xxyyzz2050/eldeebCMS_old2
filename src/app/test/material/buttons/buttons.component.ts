import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent, MatChipSelectionChange } from "@angular/material";
import { Observable } from "rxjs";

export interface Fruit {
  name: string;
}

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"]
})
export class ButtonsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  //for chips:
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [{ name: "Lemon" }, { name: "Lime" }, { name: "Apple" }];

  exists(fruit: Fruit) {
    return this.fruits.filter(el => el.name == fruit.name).length > 0;
  }
  add(event: MatChipInputEvent): void {
    // Add our fruit, then reset input value
    const input = event.input,
      value = (event.value || "").trim();

    if (value) {
      const fruit = { name: value };
      if (!this.exists(fruit)) this.fruits.push(fruit);
    }
    if (input) input.value = "";
    console.log("add: ", event);
  }

  remove(fruit: Fruit): void {
    if (this.exists(fruit)) this.fruits.splice(this.fruits.indexOf(fruit), 1);
  }

  // for ripples:
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 50;
  color: string = "red";
}

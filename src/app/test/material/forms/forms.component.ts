import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {
  MatDatepicker,
  DateAdapter,
  NativeDateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material";

import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_FORMATS
} from "@angular/material-moment-adapter";
import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: "MM/YYYY"
  },
  display: {
    dateInput: "MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class FormsComponent implements OnInit {
  title = "materialApp";
  myControl = new FormControl();
  states;

  //for input
  email = new FormControl("", [Validators.required, Validators.email]);

  //for date picker
  date = new FormControl(moment([2017, 0, 1]));

  //for select
  toppings = new FormControl();
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato"
  ];

  constructor() {}
  ngOnInit() {
    this.loadStates();
  }
  //build list of states as map of key-value pairs
  loadStates() {
    var allStates =
      "Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
          Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
          Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
          Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
          North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
          South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
          Wisconsin, Wyoming";
    this.states = allStates.split(/, +/g).map(function(state) {
      return {
        value: state.toUpperCase(),
        display: state
      };
    });
  }

  getErrorMessage(): string {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }
}

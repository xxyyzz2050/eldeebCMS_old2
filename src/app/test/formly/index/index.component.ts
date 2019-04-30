import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  form = new FormGroup({});
  model = { email: "email@gmail.com" };
  fields: FormlyFieldConfig[] = [
    {
      key: "email",
      type: "input",
      templateOptions: {
        label: "Email address",
        placeholder: "Enter email",
        required: true
      }
    }
  ];

  submit(model) {
    console.log(model);
  }
}

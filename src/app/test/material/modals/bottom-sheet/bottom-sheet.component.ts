import { Component, OnInit, Inject } from "@angular/core";
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from "@angular/material";
import { ModalsComponent } from "../modals.component";

@Component({
  selector: "app-another-component",
  templateUrl: "./bottom-sheet.component.html",
  styleUrls: ["./bottom-sheet.component.scss"]
})
export class BottomSheetComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<ModalsComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any //data received from parent component
  ) {
    console.log("data: ", data);
  }
  ngOnInit() {}
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

import { Component, OnInit, Inject } from "@angular/core";
import { ModalsComponent } from "../modals.component";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

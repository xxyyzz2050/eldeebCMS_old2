import { Component, OnInit } from "@angular/core";
import { MatBottomSheet, MatDialog, MatSnackBar } from "@angular/material";
import { BottomSheetComponent } from "./bottom-sheet/bottom-sheet.component";
import { DialogComponent } from "./dialog/dialog.component";
import { SnackBarComponent } from "./snack-bar/snack-bar.component";

@Component({
  selector: "app-modals",
  templateUrl: "./modals.component.html",
  styleUrls: ["./modals.component.scss"]
})
export class ModalsComponent implements OnInit {
  constructor(
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {}

  //For: BottomSheet
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: { test: "ok" }
    });
  }

  //For: dialog
  animal: string;
  name: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "250px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  //For: snackBar
  openSnackBar() {
    this.snackBar.open("Message sent", "undo", {
      duration: 2000
    });
  }

  openSnackBarComponent() {
    this.snackBar.openFromComponent(SnackBarComponent);
  }
}

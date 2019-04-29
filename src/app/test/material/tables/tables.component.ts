import { Component, OnInit } from "@angular/core";
import { Sort } from "@angular/material";

export interface Person {
  name: string;
  age: number;
}

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.scss"]
})
export class TablesComponent implements OnInit {
  constructor() {
    this.sortedData = this.people.slice();
  }
  ngOnInit() {}

  people: Person[] = [
    { name: "AAA", age: 20 },
    { name: "CCC", age: 10 },
    { name: "BBB", age: 30 }
  ];
  sortedData: Person[];

  sortData(sort: Sort) {
    const data = this.people.slice();

    //no sort, return the original data
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "name":
          return this.compare(a.name, b.name, isAsc);
        case "age":
          return this.compare(a.age, b.age, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a > b ? 1 : -1) * (isAsc ? 1 : -1);
  }

  displayedColumns: string[] = ["name", "age"];
}

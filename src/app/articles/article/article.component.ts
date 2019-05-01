import { Component, OnInit } from "@angular/core";
import getArticle from "../get-articles.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    getArticle(this.router.url).then(data => console.log(data)); //todo: use observable
  }
}

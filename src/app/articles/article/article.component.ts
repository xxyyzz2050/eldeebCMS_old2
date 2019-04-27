import { Component, OnInit } from "@angular/core";
import { GetArticlesService } from "../get-articles.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  data;
  constructor(private getArticle: GetArticlesService, private router: Router) {}

  ngOnInit() {
    this.data = this.getArticle.getData(this.router.url);
    console.log("data:", this.data);
  }
}

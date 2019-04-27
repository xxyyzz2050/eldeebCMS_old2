import { Injectable } from "@angular/core";

namespace types {
  export type schema = {
    type: "article" | "category" | "index";
    id?: number;
  };
  export type data = { title: string; content: string }; //todo: import article from schema
}

@Injectable({
  providedIn: "root"
})
//don't put any code (including ';')  between @Injectable() and the class
export class GetArticlesService {
  getData(url: string) {
    return this.fetchData(this.parseURL(url));
  }

  parseURL(url: string): types.schema {
    return { type: "article", id: 1 };
  }

  fetchData(schema: types.schema): types.data | types.data[] {
    //use files.cache() to fetch cached data or cache new data
    let data = { title: "article title", content: "article content" };
    return data;
  }
}

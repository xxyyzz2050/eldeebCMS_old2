import { Injectable } from "@angular/core";
import db from "$eldeeb/db";
import files from "$eldeeb/files";
import articleSchema from "../schema/article";

//todo: merge with namespace types (from eldeeb lib)
namespace types2 {
  export type urlParts = {
    type: string; //todo: type: "article" | "category" | "index";
    id?: number;
  };
  interface articleSchema {
    //todo: use the imported articleSchema
    title: string;
    content: string;
  }
  export type data = articleSchema | articleSchema[];
}

@Injectable({
  providedIn: "root"
})
//don't put any code (including ';')  between @Injectable() and the class

/**
 * receives acticle's url and returns the content.
 */
class GetArticlesService {
  private parts: types2.urlParts;

  /**
   * getData from cache or fetch from the remote server via .fetchData()
   * @method getData
   * @param  url:PathLike url of the article
   * @return [description]
   */
  async getData(url: types.files.PathLike) {
    this.parts = this.parseURL(url);
    //return this.fetchData(this.parts);
    return files().cache(
      `articles/${this.parts.type}/${this.parts.id}.json`,
      async () => this.fetchData(this.parts)
    );
  }

  /**
   * parseURL to map object type [article|category] & id
   *  url= /<type>-<objectId> or /<shortId>
   * @method parseURL
   * @param  url:PathLike
   * @return urlParts{type,id}
   */
  private parseURL(url: types.files.PathLike): types2.urlParts {
    url = url.toString();
    let type: string,
      id: number,
      part = url.substring(url.lastIndexOf("/") + 1);

    if (part.match(/(.*)-[0-9a-fA-F]{24}/)) {
      let tmp = part.split("-"); //[string,string]
      if (typeof tmp[1] == "undefined") [type, id] = ["index", 0];
      else [type, id] = [tmp[0], +tmp[1]]; //+tmp[1] to convert to number
    } else [type, id] = ["index", 0];

    return { type, id };
  }

  //todo: fetchData():types.promise<types2.data> | types.promise<types2.data[]> {}
  private async fetchData(urlParts: types2.urlParts): Promise<types2.data> {
    //todo: use eldeeb/db to download the data
    let data = { title: "article title", content: "article content" };
    return new Promise(r => r(data));
  }
}
export default function(url: types.files.PathLike) {
  return new GetArticlesService().getData(url);
}
/*
return eldeeb.data().cache(
  `${type}/${id}.json`, //`${type}/${id == 0 ? 'index' : id}.json`,
  async () => {
     let db=new $db();
    return {
      type,
      data: await db.connect().then(db => {
        eldeeb.log(db, "updating data..");
        if (type == "article") {
          let { model } = db.model("tmp_articles", articleSchema[0]);
          return (
            model
              //.findOne({ shortId: shortId })
              .findById(id)
              .lean()
              .exec()
          );
        } else {
          //nx: this function replaces ./articles_index.js
          let { model } = db.model("tmp_articles_index", indexSchema[0]);
          return model
            .find() //nx: {category:id}
            .lean()
            .limit(5)
            .exec();
        }
      })
    };
  },
  3,
  "json"
);
 */

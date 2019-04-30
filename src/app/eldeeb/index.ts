/// -<reference path="../../../projects/eldeeb/src/lib/types.ts" /> //todo: 'eldeeb/types.ts'
/**
 *  override eldeeb classes to customize them for our needs
 *  index: provide the needed instances from other customized classes with our options
 */

import eldeeb from "eldeeb";
//let eldeeb = require("eldeeb"); //todo: using import make error in get-articles.service.ts eldeeb.log() : property log dosen't exist in type default

export default class extends eldeeb {
  constructor(public options?: types.index.TypeOptions) {
    super(options);
  }
  /*
  instances overrides .. depricated!
  import sub modules (such as db-mongoDB) whitch imports this module, will cause error: Circular dependency
   */
  /*
  data(root?: data.PathLike) {
    let data = require("./data.ts").default;
    return new data(root);
  }

  db(
    options?: dbMongoDB.connectionOptions,
    done?: promise.NEXT,
    fail?: promise.NEXT,
    events?: any
  ) {
    let db = require("./db.ts").default; //todo: Circular dependency, db <-> index, index import db for .db(){return new db()}  and db require index to use it's functions such as .run()
    return new db().connect(
      options,
      done,
      fail,
      events
    );
  }
  */
}

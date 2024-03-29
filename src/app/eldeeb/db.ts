/*
connects to db and returns a promise (todo: return an observable)
todo: copy from src/app/mongo.service.ts
eldeeb.db(options,db=>{queries},err=>error).then(db=>{queries2})
*/

import { dbMongoDB, Eldeeb } from "eldeeb";
import { generate as shortId } from "shortId";
import $objectsSchema from "../schema/objects"; //renamed from objectsSchema to $objectsScema because there is another varible with the same name https://stackoverflow.com/a/51103144
import config from "../eldeeb-config";

let eldeeb = new (<any>Eldeeb)({ mark: "db", log: true }); //todo: change log to false in production mode

export class DB extends dbMongoDB {
  constructor() {
    super();
    console.log("*** eldeeb/db loaded ***");
  }
  connect(
    options?: types.dbMongoDB.connectionOptions,
    done?: types.promise.NEXT,
    fail?: types.promise.NEXT,
    events?: any
  ) {
    eldeeb.log("db config:", config.db);
    return super.connect(
      eldeeb.merge(config.db, options || {}),
      done,
      fail,
      events
    );
  }

  /*
   create the model (schema=../schema/${coll}.js) and insert into objects table
  */

  //todo: rename to model(), but not same signature as super.model()
  _model(coll: string, obj?: boolean) {
    let options: types.dbMongoDB.modelOptions,
      { model: objectsModel, objectsSchema } = super.model(
        "objects",
        $objectsSchema[0],
        { modifiedAt: true }
      );

    if (obj)
      options = {
        //adjust options for models that needs to be saved in the Objects collection
        fields: { modifiedAt: true },
        adjust: {
          statics: {
            insertObj: function(doc, object) {
              //  console.log('this:', this)
              doc.shortId = shortId(); //also it will be auto generated
              return this.create(doc).then(
                data => {
                  objectsModel.create({
                    shortId: data.shortId,
                    _id: data._id,
                    link: data.link,
                    object: object
                  });
                  return data;
                },
                err => err
              );
            }
          }
        }
      };
    else
      options = {
        fields: { modifiedAt: true }
      };
    return super.model(
      coll,
      require(`../schema/${coll}.js`)[0], //or .json|.ts
      options
    );
  }
}

export default function(
  options?: types.dbMongoDB.connectionOptions,
  done?: types.promise.NEXT,
  fail?: types.promise.NEXT,
  events?: any
): Promise<any> {
  return new DB().connect(
    options,
    done,
    fail,
    events
  ); //returns a promise, not _mongoDB
}

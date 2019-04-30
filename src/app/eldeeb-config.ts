//declare const require: any;
import path from "path"; //or import * as path from "path";
const mode = process.env.NODE_ENV || "development"; //npm dev, check package.json->scripts
console.log("*** mode ***", mode);
console.log("*** path ***", path);
console.log("*** path.resolve2() ***", path.resolve);
const EldeebConfig = {
  root: path.resolve(), //`${path.resolve()}${path.sep}` 'D:/Downloads/__projects/NodeJs/almogtama3.com/'
  db: {
    user: "xxyyzz2050",
    pass: process.env.dbPass || "Xx159753@@",
    host:
      mode == "development"
        ? "cluster-test-kuwit.gcp.mongodb.net"
        : "almogtama3-gbdqa.gcp.mongodb.net",
    srv: true,
    db: mode == "development" ? "test" : "database",
    debug: mode == "development" ? true : false,
    get models() {
      return `${this.root}/store/db/schema/{collection}.js`;
    } //absolute or related to eldeeb/lib/db-mongoDB (not to this file, or the file contains the queries)
    //cannot use this or objectName inside object property i.e test={x:1, y:this.x, z:test.x, a(){return this.x}} //useing 'this' or 'test' without wrapping it inside a function is wrong; https://stackoverflow.com/questions/4616202/self-references-in-object-literals-initializers; using get keyword: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    //nx: model=require(models.replace('{collection}',coll))
  },

  github: ["xxyyzz2050@gmail.com", "Xx159753@@", "$key"]
};

export default EldeebConfig;
export const root = EldeebConfig.root,
  db = EldeebConfig.db;

//to import only a part of this file use: import {root} from 'eldeeb.config.js'
// to import all : import * as config from '..' (or import config from '..')

/*
export class EldeebConfig {
  cofig,root
}*/

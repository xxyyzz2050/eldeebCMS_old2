import { Files } from "eldeeb";

class _files extends Files {
  constructor(root?: types.files.PathLike) {
    super(root || ""); //nx: provide the root path of the project;  nx:test if root is the path of this file or the parent file (i.e lib/data.js)
  }

  cache(
    file: types.files.PathLike,
    data?: any,
    expire: number = 10 * 24,
    type?: string,
    allowEmpty: boolean = true
  ): any {
    return super.cache(`tmp/${file}`, data, expire, type, allowEmpty);
  }

  mkdir(
    path: types.files.PathLike | types.files.PathLike[],
    mode?: number | string, //ex: 0777
    index?: string | boolean //ex: index.html
  ) {
    if (path instanceof Array) path = path.map(el => `data/${el.toString()}`);
    else path = `data/${path.toString()}`;
    return super.mkdir(path, mode, index);
  }
}

export default function files(root?: types.files.PathLike): _files {
  return new _files(root);
}

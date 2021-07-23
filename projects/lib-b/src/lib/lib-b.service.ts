import { Injectable } from "@angular/core";
import { LibBApiPort } from "port-lib-b";

@Injectable()
export class LibBService implements LibBApiPort {

  apiFromLibB(param: string): "libBResult" {
    return "libBResult";
  }


}

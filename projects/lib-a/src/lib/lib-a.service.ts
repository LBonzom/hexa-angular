import { Injectable } from "@angular/core";
import { LibAApiPort } from "port-lib-a";

@Injectable()
export class LibAService implements LibAApiPort {

  apiFromLibA(param: string): "libAResult" {
    return "libAResult";
  }


}

import { Injectable } from "@angular/core";
import { LibASpiPort } from "port-lib-a";
import { Observable } from "rxjs";
import { LibBUseAdapter } from "../lib-b/lib-b.use.adapter";

@Injectable()
export class LibASpiImplAdapter implements LibASpiPort {
  constructor(private readonly libBUseAdapter: LibBUseAdapter) {}

  spiFromLibA(): Observable<'libBResult'> {
    return this.libBUseAdapter.apiFromLibB('custom');
  }

}

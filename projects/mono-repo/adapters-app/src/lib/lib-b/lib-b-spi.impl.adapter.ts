import { Injectable } from "@angular/core";
import { LibBSpiPort } from "port-lib-b";
import { Observable } from "rxjs";
import { LibAUseAdapter } from "../lib-a/lib-a.use.adapter";

@Injectable()
export class LibBSpiImplAdapter implements LibBSpiPort {
  constructor(private readonly libAUseAdapter: LibAUseAdapter) {}

  spiFromLibB(): Observable<"libAResult"> {
    return this.libAUseAdapter.apiFromLibA("custom");
  }
}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AdapterSpiAbstractService } from "../adapter-spi-abstract.service";

@Injectable()
export class LibBUseAdapter {
  constructor(private readonly adapterSpiPort: AdapterSpiAbstractService) {}

  apiFromLibB(param: string): Observable<"libBResult"> {
    return this.adapterSpiPort
      .getLibBApi()
      .pipe(map((api) => api.apiFromLibB(param)));

  }
}

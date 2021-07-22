import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AdapterSpiAbstractService } from "../adapter-spi-abstract.service";

@Injectable()
export class LibAUseAdapter {
  constructor(private readonly adapterSpiPort: AdapterSpiAbstractService) {}

  apiFromLibA(param: string): Observable<"libAResult"> {
    return this.adapterSpiPort
      .getLibAApi()
      .pipe(map((api) => api.apiFromLibA(param)));

  }
}

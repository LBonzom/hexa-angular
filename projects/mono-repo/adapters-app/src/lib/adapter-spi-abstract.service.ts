import { LibAApiPort } from "port-lib-a";
import { LibBApiPort } from "port-lib-b";
import { Observable } from "rxjs";
import { AdapterSpiPort } from "./adapter.spi.port";

export abstract class AdapterSpiAbstractService implements AdapterSpiPort {
  abstract getLibAApi(): Observable<LibAApiPort>;

  abstract getLibBApi(): Observable<LibBApiPort>;
}

import { LibAApiPort } from "port-lib-a";
import { LibBApiPort } from "port-lib-b";
import { Observable } from "rxjs";

export interface AdapterSpiPort {
  getLibAApi(): Observable<LibAApiPort>;

  getLibBApi(): Observable<LibBApiPort>;
}

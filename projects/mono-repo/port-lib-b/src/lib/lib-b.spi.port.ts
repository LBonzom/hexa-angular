import { Observable } from 'rxjs';

export interface LibBSpiPort {
  spiFromLibB(): Observable<"libAResult">;
}

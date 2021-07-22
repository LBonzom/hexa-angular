import { Observable } from 'rxjs';

export interface LibASpiPort {
  spiFromLibA(): Observable<"libBResult">;
}

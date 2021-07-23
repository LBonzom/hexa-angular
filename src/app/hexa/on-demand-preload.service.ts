import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OnDemandPreloadService {
  private readonly subject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  readonly state: Observable<string | null> = this.subject.asObservable();

  /*
   Function used to trigger lazy loaded module load".
   We use the module route Patch as identifier.
   */
  startPreload(routePath: string): void {
    this.subject.next(routePath);
  }
}

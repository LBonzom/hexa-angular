import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, filter, mergeMap, retryWhen, take } from 'rxjs/operators';
import { OnDemandPreloadService } from './on-demand-preload.service';

@Injectable({ providedIn: 'root' })
export class OnDemandPreloadStrategyService implements PreloadingStrategy {
  private preloadOnDemand$: Observable<string | null>;

  constructor(private preloadOnDemandService: OnDemandPreloadService) {
    this.preloadOnDemand$ = this.preloadOnDemandService.state;
  }

  /*
   * Function called by Angular on App init.
   * This function is called for each route with "loadChildren" arrow.
   * Angular will subscribe on each Observable returned by this function.
   * Then each Observable is link to the same subject "preloadOnDemand$".
   * When "preloadOnDemand$" emit each observable is trigger
   * and it filter the route to know if it is necessary to trigger the "load" function
   */
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return this.preloadOnDemand$.pipe(
      filter(routePath => this.isLoadNeededForThisSpecificRoutePath(route, routePath)),
      take(1),
      mergeMap(() => this.loadWithDelayedRetry(load))
    );
  }

  private loadWithDelayedRetry(load: () => Observable<unknown>): Observable<unknown> {
    const retryDelay = 10000; // 10 seconds;
    // retry every 10 seconds
    return load().pipe(retryWhen(delay(retryDelay)));
  }

  /*
   We compare the route gives by Angular and the one from the subject "preloadOnDemand$".
   If it match it return true.
   */
  private isLoadNeededForThisSpecificRoutePath(route: Route, routePath: string | null): boolean {
    return !!routePath && !!route && route.path === routePath;
  }
}

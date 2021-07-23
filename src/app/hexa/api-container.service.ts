import { Injectable } from "@angular/core";
import { AdapterSpiPort } from "adapters-app";
import { LibAApiPort } from "port-lib-a";
import { LibBApiPort } from "port-lib-b";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map, take } from "rxjs/operators";
import { OnDemandPreloadService } from "./on-demand-preload.service";

export const enum LazyModuleName {
  LIB_A = "LIB_A",
  LIB_B = "LIB_B"
}

interface ApiServiceByLazyModuleName {
  readonly [LazyModuleName.LIB_A]: LibAApiPort | null;
  readonly [LazyModuleName.LIB_B]: LibBApiPort | null;
}

export type DpwLazyApiContainer = { readonly [type in LazyModuleName]: ApiServiceByLazyModuleName[type] };
export type DpwRouteContainer = { readonly [type in LazyModuleName]: string };

/**
 * Service used by feature interaction module to get all feature's API.
 */
@Injectable({ providedIn: "root" })
export class DpwApiContainerService implements AdapterSpiPort {

  private static readonly INIT_DPW_LAZY_API_CONTAINER: DpwLazyApiContainer = {
    [LazyModuleName.LIB_A]: null,
    [LazyModuleName.LIB_B]: null
  };
  private readonly dpwLazyApiContainer$: BehaviorSubject<DpwLazyApiContainer> = new BehaviorSubject(
    DpwApiContainerService.INIT_DPW_LAZY_API_CONTAINER
  );
  private readonly dpwLazyRouteContainer: DpwRouteContainer = {
    [LazyModuleName.LIB_A]: "lib-a",
    [LazyModuleName.LIB_B]: "lib-b"
  };

  constructor(
    private readonly onDemandPreloadService: OnDemandPreloadService
  ) {}

  static isNonNullable<T>(data: T): data is NonNullable<T> {
    return data !== null && data !== undefined;
  }

  getLibAApi(): Observable<LibAApiPort> {
    return this.getApiFromContainerThenComplete(LazyModuleName.LIB_A);
  }

  getLibBApi(): Observable<LibBApiPort> {
    return this.getApiFromContainerThenComplete(LazyModuleName.LIB_B);
  }

  setLibAApi(libAApiInstance: LibAApiPort): void {
    this.setApiInContainer(LazyModuleName.LIB_A, libAApiInstance);
  }

  setLibBApi(libBApiPort: LibBApiPort): void {
    this.setApiInContainer(LazyModuleName.LIB_B, libBApiPort);
  }


  /**
   * Generic function used to get api from the "dpwLazyApiContainer$" and complete immediately.
   * It trigger the load if needed
   */
  private getApiFromContainerThenComplete<T extends LazyModuleName>(lazyModuleName: T): Observable<NonNullable<DpwLazyApiContainer[T]>> {
    this.launchPreloadIfNeeded(lazyModuleName);
    return this.dpwLazyApiContainer$.pipe(
      map(apiContainer => apiContainer[lazyModuleName]),
      filter(DpwApiContainerService.isNonNullable),
      take(1)
    );
  }

  /**
   * Function used to trigger the lazy module load if it is not registered in the "dpwLazyApiContainer$"
   */
  private launchPreloadIfNeeded(lazyModuleName: LazyModuleName): void {
    if (!this.dpwLazyApiContainer$.getValue()[lazyModuleName]) {
      const route = this.dpwLazyRouteContainer[lazyModuleName];
      this.onDemandPreloadService.startPreload(route);
    }
  }

  /**
   * Generic function used to set new api in the "dpwLazyApiContainer$".
   */
  private setApiInContainer<T extends LazyModuleName>(lazyModuleName: T, api: NonNullable<DpwLazyApiContainer[T]>): void {
    this.dpwLazyApiContainer$.next({ ...this.dpwLazyApiContainer$.getValue(), [lazyModuleName]: api });
  }
}

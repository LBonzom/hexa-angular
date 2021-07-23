import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OnDemandPreloadStrategyService } from "./hexa/on-demand-preload-strategy.service";

const routes: Routes = [
  {
    path: "lib-a",
    loadChildren: () => import("./lazy/lib-a-wrapper-lazy.module").then(m => m.LibAWrapperLazyModule)
  }, {
    path: "lib-b",
    loadChildren: () => import("./lazy/lib-b-wrapper-lazy.module").then(m => m.LibBWrapperLazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: OnDemandPreloadStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

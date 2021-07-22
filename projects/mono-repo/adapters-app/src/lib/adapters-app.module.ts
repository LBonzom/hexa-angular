import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { AdapterSpiAbstractService } from "./adapter-spi-abstract.service";
import { AdapterSpiPort } from "./adapter.spi.port";
import { LibASpiImplAdapter } from "./lib-a/lib-a-spi.impl.adapter";
import { LibAUseAdapter } from "./lib-a/lib-a.use.adapter";
import { LibBSpiImplAdapter } from "./lib-b/lib-b-spi.impl.adapter";
import { LibBUseAdapter } from "./lib-b/lib-b.use.adapter";


@NgModule({})
export class AdaptersAppModule {
  static forRoot(adapterService: Type<AdapterSpiPort>): ModuleWithProviders<AdaptersAppModule> {
    return {
      ngModule: AdaptersAppModule,
      providers: [
        {
          provide: AdapterSpiAbstractService,
          useValue: adapterService
        },
        LibAUseAdapter,
        LibASpiImplAdapter,
        LibBUseAdapter,
        LibBSpiImplAdapter
      ]
    };
  }
}

import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { LibASpiPort } from "port-lib-a";
import { LibARoutingModule } from "./lib-a-routing.module";
import { LibAComponent } from "./lib-a.component";
import { LibAService } from "./lib-a.service";
import { TOKEN_ADAPTER_SPI_CLASS_LIB_A } from "./token";


@NgModule({
  declarations: [
    LibAComponent
  ],
  imports: [LibARoutingModule]
})
export class LibAModule {
  static forRoot(libASpiPortClass: Type<LibASpiPort>): ModuleWithProviders<LibAModule> {
    return {
      ngModule: LibAModule,
      providers: [
        {
          provide: TOKEN_ADAPTER_SPI_CLASS_LIB_A,
          useExisting: libASpiPortClass
        },
        LibAService
      ]
    };
  }
}

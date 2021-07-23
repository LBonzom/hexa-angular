import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { LibBSpiPort } from "port-lib-b";
import { LibBRoutingModule } from "./lib-b-routing.module";
import { LibBComponent } from "./lib-b.component";
import { LibBService } from "./lib-b.service";
import { TOKEN_ADAPTER_SPI_CLASS_LIB_B } from "./token";


@NgModule({
  declarations: [
    LibBComponent
  ],
  imports: [LibBRoutingModule]
})
export class LibBModule {
  static forRoot(libBSpiClass: Type<LibBSpiPort>): ModuleWithProviders<LibBModule> {
    return {
      ngModule: LibBModule,
      providers: [
        {
          provide: TOKEN_ADAPTER_SPI_CLASS_LIB_B,
          useExisting: libBSpiClass
        },
        LibBService
      ]
    };
  }
}

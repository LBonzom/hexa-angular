import { NgModule } from "@angular/core";
import { LibBSpiImplAdapter } from "adapters-app";
import { LibBModule, LibBService } from "lib-b";
import { DpwApiContainerService } from "../hexa/api-container.service";

@NgModule({
  imports: [
    LibBModule.forRoot(LibBSpiImplAdapter)
  ]
})
export class LibBWrapperLazyModule {
  constructor(dpwApiContainerService: DpwApiContainerService, libBService: LibBService) {
    dpwApiContainerService.setLibBApi(libBService);
  }
}
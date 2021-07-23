import { NgModule } from "@angular/core";
import { LibASpiImplAdapter } from "adapters-app";
import { LibAModule, LibAService } from "lib-a";
import { DpwApiContainerService } from "../hexa/api-container.service";

@NgModule({
  imports: [
    LibAModule.forRoot(LibASpiImplAdapter)
  ]
})
export class LibAWrapperLazyModule {
  constructor(dpwApiContainerService: DpwApiContainerService, libAService: LibAService) {
    dpwApiContainerService.setLibAApi(libAService);
  }
}
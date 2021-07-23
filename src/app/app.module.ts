import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AdaptersAppModule } from "adapters-app";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DpwApiContainerService } from "./hexa/api-container.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdaptersAppModule.forRoot(DpwApiContainerService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

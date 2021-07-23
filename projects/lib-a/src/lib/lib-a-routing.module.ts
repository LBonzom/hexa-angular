import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibAComponent } from "./lib-a.component";

const routes: Routes = [
  {
    path: "",
    component: LibAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibARoutingModule {}

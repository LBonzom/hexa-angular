import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibBComponent } from "./lib-b.component";

const routes: Routes = [
  {
    path: "",
    component: LibBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibBRoutingModule {}

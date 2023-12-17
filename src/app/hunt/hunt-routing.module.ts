import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./components/table/table.component";
import {HuntComponent} from "./components/hunt/hunt.component";

const routes: Routes = [
  {
    path: "hunt", component: HuntComponent, children: [
      {path: "table", component: TableComponent},
      {path: "", redirectTo: "table", pathMatch: "full"}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuntRoutingModule { }

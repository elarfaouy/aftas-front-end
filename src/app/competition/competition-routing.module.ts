import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompetitionComponent} from "./components/competition/competition.component";

const routes: Routes = [
  {
    path: "competition", component: CompetitionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionRoutingModule {
}

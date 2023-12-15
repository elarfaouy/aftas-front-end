import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompetitionRoutingModule} from "./competition-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CompetitionComponent} from "./components/competition/competition.component";
import {RouterOutlet} from "@angular/router";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    CompetitionComponent,
  ],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    RouterOutlet
  ],
})
export class CompetitionModule { }

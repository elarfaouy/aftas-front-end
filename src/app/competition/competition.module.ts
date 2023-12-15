import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompetitionRoutingModule} from "./competition-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CompetitionComponent} from "./components/competition/competition.component";
import {RouterOutlet} from "@angular/router";
import {MatSortModule} from "@angular/material/sort";
import { TableComponent } from './components/table/table.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    CompetitionComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    HttpClientModule,
    RouterOutlet,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule
  ],
})
export class CompetitionModule { }

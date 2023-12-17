import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuntRoutingModule } from './hunt-routing.module';
import { HuntComponent } from './components/hunt/hunt.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    HuntComponent,
    TableComponent
  ],
    imports: [
        CommonModule,
        HuntRoutingModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatCardModule
    ]
})
export class HuntModule { }
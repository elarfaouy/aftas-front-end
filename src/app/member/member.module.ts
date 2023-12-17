import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './components/member/member.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    MemberComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    HttpClientModule,
    RouterOutlet,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class MemberModule { }

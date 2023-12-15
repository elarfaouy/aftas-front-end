import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompetitionElement} from "../../competition/models/competition-element";
import {PageableResponse} from "../../competition/models/pageable-response";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private url: string = "http://localhost:8888/api/competition?page=0&size=50";

  constructor(private _http: HttpClient) { }

  getCompetitions(): Observable<PageableResponse> {
    return this._http.get<PageableResponse>(this.url);
  }
}

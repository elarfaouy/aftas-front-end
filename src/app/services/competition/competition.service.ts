import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageableResponse} from "../../competition/models/pageable-response";
import {CompetitionElement} from "../../competition/models/competition-element";
import {StandardApiResponse} from "../../models/standard-api-response";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private url: string = "http://localhost:8888/api/competition";

  constructor(private _http: HttpClient) { }

  getCompetitions(): Observable<PageableResponse> {
    return this._http.get<PageableResponse>(this.url + "?page=0&size=50");
  }

  saveCompetition(competition: CompetitionElement): Observable<CompetitionElement>{
    return this._http.post<CompetitionElement>(this.url, competition);
  }
}

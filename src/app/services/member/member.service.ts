import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MemberElement} from "../../member/models/member-element";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private url: string = "http://localhost:8888/api/member";

  constructor(private _http: HttpClient) { }

  getMembers(): Observable<MemberElement[]> {
    return this._http.get<MemberElement[]>(this.url);
  }

  saveMember(member: MemberElement): Observable<MemberElement> {
    return this._http.post<MemberElement>(this.url, member);
  }
}

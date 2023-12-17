import {CompetitionElement} from "../../competition/models/competition-element";
import {MemberElement} from "./member-element";

export interface RegisterElement {
  rank: number;
  score: number;
  competition: string | CompetitionElement | null;
  member: string | MemberElement | null;
}

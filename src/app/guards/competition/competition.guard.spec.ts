import {TestBed} from '@angular/core/testing';

import {CompetitionGuard} from './competition.guard';

describe('competitionGuard', () => {
  let guard: CompetitionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

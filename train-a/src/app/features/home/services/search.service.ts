import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SearchCriteria {
  from: string;
  to: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchCriteriaSubject = new BehaviorSubject<SearchCriteria | null>(null);
  searchCriteria$ = this.searchCriteriaSubject.asObservable();

  updateSearchCriteria(criteria: SearchCriteria) {
    this.searchCriteriaSubject.next(criteria);
  }
}

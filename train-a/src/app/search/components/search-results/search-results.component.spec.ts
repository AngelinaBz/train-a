import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SearchResultsComponent } from './search-results.component';

describe('SearchResultsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SearchResultsComponent],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SearchResultsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

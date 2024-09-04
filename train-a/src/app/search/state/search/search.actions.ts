import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../../shared/models/ApiError.model';
import { SearchCriteria, SearchResult } from '../../models/Search.model';

export const performSearch = createAction('[Search] Perform Search', props<{ criteria: SearchCriteria }>());
export const performSearchSuccess = createAction('[Search] Perform Search Success', props<{ searchResults: SearchResult }>());
export const performSearchFailure = createAction('[Search] Perform Search Failure', props<{ error: ApiError }>());

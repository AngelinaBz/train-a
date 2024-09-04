import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../../shared/models/ApiError.model';
import RideDetails from '../../models/RideDetails.model';
import * as DetailsActions from './details.actions';

export interface DetailsState {
  details: {
    [key: number]: {
      isLoading: boolean;
      data: RideDetails | null;
      error: ApiError | null;
    };
  };
}

export const initialState: DetailsState = {
  details: {},
};

export const detailsReducer = createReducer(
  initialState,
  on(
    DetailsActions.loadDetails,
    (state, { id }): DetailsState => ({
      ...state,
      details: {
        ...state.details,
        [id]: {
          ...state.details[id],
          isLoading: true,
        },
      },
    }),
  ),
  on(
    DetailsActions.loadDetailsSuccess,
    (state, { data }): DetailsState => ({
      ...state,
      details: {
        ...state.details,
        [data.rideId]: {
          isLoading: false,
          data,
          error: null,
        },
      },
    }),
  ),
  on(
    DetailsActions.loadDetailsFailure,
    (state, { error, id }): DetailsState => ({
      ...state,
      details: {
        ...state.details,
        [id]: {
          data: null,
          isLoading: false,
          error,
        },
      },
    }),
  ),
);

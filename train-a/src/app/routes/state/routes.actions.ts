import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Route } from '../models/route.model';

export const loadRoutes = createAction('[Routes] Load Routes');
export const loadRoutesSuccess = createAction('[Routes] Load Routes Success', props<{ routes: Route[] }>());
export const loadRoutesFailure = createAction('[Routes] Load Routes Failure', props<{ error: ApiError }>());

export const deleteRoute = createAction('[Routes] Delete Route', props<{ routeId: number }>());
export const deleteRouteSuccess = createAction('[Routes] Delete Route Success');
export const deleteRouteFailure = createAction('[Routes] Delete Route Failure', props<{ error: ApiError }>());

export const updateRoutes = createAction('[Routes] Update Routes', props<{ routes: Route[] }>());

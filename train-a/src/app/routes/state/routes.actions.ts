import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Route, RouteWithoutId } from '../models/route.model';

export const loadRoutes = createAction('[Routes] Load Routes');
export const loadRoutesSuccess = createAction('[Routes] Load Routes Success', props<{ routes: Route[] }>());
export const loadRoutesFailure = createAction('[Routes] Load Routes Failure', props<{ error: ApiError }>());

export const deleteRoute = createAction('[Routes] Delete Route', props<{ routeId: number }>());
export const deleteRouteSuccess = createAction('[Routes] Delete Route Success');
export const deleteRouteFailure = createAction('[Routes] Delete Route Failure', props<{ error: ApiError }>());

export const createRoute = createAction('[Route] Create Route', props<{ route: RouteWithoutId }>());
export const createRouteSuccess = createAction('[Route] Create Route Success');
export const createRouteFailure = createAction('[Route] Create Route Failure', props<{ error: ApiError }>());

export const updateRoute = createAction('[Route] Update Route', props<{ routeId: number; route: RouteWithoutId }>());
export const updateRouteSuccess = createAction('[Route] Update Route Success');
export const updateRouteFailure = createAction('[Route] Update Route Failure', props<{ error: ApiError }>());

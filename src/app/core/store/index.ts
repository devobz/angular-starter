import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '@env/environment';
import { IAppState } from './state/app.state';
// Reducers
import { userReducers } from './reducers/user.reducers';
// Effects
import { UserEffects } from './effects/user.effects';
import { settingReducers } from './reducers/setting.reducers';
import { SettingEffects } from './effects/setting.effects';

// Map Reducers
export const reducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  setting: settingReducers,
};

// Effects
export const effects = [
  UserEffects,
  SettingEffects,
];

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    // console.log('state', state);
    // console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<IAppState, any>[] = !environment.production ? [debug] : [];

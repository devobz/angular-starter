import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { ISettingState, initialSettingState } from './setting.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  setting: ISettingState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  setting: initialSettingState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}

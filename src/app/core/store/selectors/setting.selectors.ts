import { createSelector } from '@ngrx/store';
import { ISettingState } from '../state/setting.state';
import { IAppState } from '../state/app.state';

const settingState = (state: IAppState) => state.setting;

export const selectSetting = createSelector(
  settingState,
  (state: ISettingState) => state.settings
);


import { Action } from '@ngrx/store';
import { ISetting } from '../../models/setting.interface';

export enum ESettingActions {
  GetSetting = '[Setting] Get Setting',
  GetSettingSuccess = '[Setting] Get Setting Success',
  ChangeTheme = '[Setting] Change Theme',
}

export class GetSetting implements Action {
  public readonly type = ESettingActions.GetSetting;
}

export class GetSettingSuccess implements Action {
  public readonly type = ESettingActions.GetSettingSuccess;
  constructor(public payload: ISetting) { }
}

export class ChangeTheme implements Action {
  public readonly type = ESettingActions.ChangeTheme;
  constructor(public payload: string) { }
}

export type SettingActions = GetSetting | GetSettingSuccess | ChangeTheme;

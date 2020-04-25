import { ISetting } from '../../models/setting.interface';

export interface ISettingState {
  settings: ISetting;
}

export const initialSettingState: ISettingState = {
  settings: null
};


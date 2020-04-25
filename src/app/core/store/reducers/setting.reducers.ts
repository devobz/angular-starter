import { initialSettingState, ISettingState } from '../state/setting.state';
import { SettingActions, ESettingActions } from '../actions/setting.actions';

export const settingReducers = (
  state = initialSettingState,
  action: SettingActions
): ISettingState => {
  switch (action.type) {
    case ESettingActions.GetSettingSuccess: {
      return {
        ...state,
        settings: action.payload
      };
    }
    case ESettingActions.ChangeTheme: {
      return {
        ...state,
        settings: {
          theme: action.payload
        }
      };
    }
    default:
      return state;
  }
};

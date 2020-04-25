import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { GetSetting, ESettingActions, GetSettingSuccess } from '../actions/setting.actions';
import { SettingService } from '@app/core/services/setting/setting.service';
import { ISetting } from '@app/core/models/setting.interface';

@Injectable()
export class SettingEffects {
  @Effect()
  getSetting$ = this.actions$.pipe(
    ofType<GetSetting>(ESettingActions.GetSetting),
    switchMap(() => this.settingService.getSetting()),
    switchMap((setting: ISetting) => {
      return of(new GetSettingSuccess(setting));
    })
  );

  constructor(
    private actions$: Actions,
    private settingService: SettingService,
  ) { }
}

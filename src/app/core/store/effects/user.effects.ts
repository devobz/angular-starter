import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetUsersSuccess,
  EUserActions,
  GetUserSuccess,
  GetUser,
  GetUsers,
} from '../actions/user.actions';
import { selectUserList } from '../selectors/user.selectors';
import { UserService } from '@app/core/services/user/user.service';
import { IUserHttp } from '@app/core/models/http/user-http.interface';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );

  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private userService: UserService
  ) { }
}

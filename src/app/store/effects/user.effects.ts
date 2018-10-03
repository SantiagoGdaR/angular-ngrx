import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { IUser } from '../../models/user.interface';
import { GetUsersSuccess, EUserActions, GetUserSuccess, GetUser, GetUsers } from '../actions/user.actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUsers),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(state => state.users.users))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter((user) => user.id === id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers()),
    switchMap((mentors: IUser[]) => of(new GetUsersSuccess(mentors)))
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>) {}
}

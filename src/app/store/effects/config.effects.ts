import { Injectable } from '@angular/core';

@Injectable()
export class ConfigEffects {
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
    ofType(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers()),
    switchMap((mentors: IUser[]) => of(new GetUsersSuccess(mentors)))
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>) {}
}

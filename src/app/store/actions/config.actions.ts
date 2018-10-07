import { Action } from '@ngrx/store';

import { IConfig } from '../../models/config.interface';

export enum EConfigActions {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GetConfigSuccess;
  constructor(public payload: IConfig) {}
}

export type ConfigActions =
  | GetConfig
  | GetConfigSuccess;


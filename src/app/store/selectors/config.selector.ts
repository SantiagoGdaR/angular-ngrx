import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IConfigState } from '../state/config.state';

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
  configState,
  (state: IConfigState) => state.config
);

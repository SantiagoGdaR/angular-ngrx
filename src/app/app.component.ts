import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { GetConfig } from './store/actions/config.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'angular-ngrx';

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}

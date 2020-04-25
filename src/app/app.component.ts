import { Component, OnInit } from '@angular/core';
import { routeAnimations } from '@app/core/core.module';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectSetting } from './core/store/selectors/setting.selectors';
import { GetSetting, ChangeTheme } from './core/store/actions/setting.actions';
import { environment as env } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  title = env.title;
  version = env.version;
  setting$ = this.store.pipe(select(selectSetting));
  theme: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetSetting());
    this.setting$.subscribe((res: any) => { this.theme = res?.theme; });
  }

  onChangeTheme(e) {
    this.store.dispatch(new ChangeTheme(e.value));
  }

}

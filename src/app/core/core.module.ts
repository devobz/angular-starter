import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PipeModule } from './pipe/pipe.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromState from './store';
import { environment as env } from '@env/environment';
import { UserService } from './services/user/user.service';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PipeModule,
    StoreModule.forRoot(fromState.reducers, { metaReducers: fromState.metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot(fromState.effects),
    !env.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [
    PipeModule
  ],
  providers: [
    UserService
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
export { AnimationsService } from './services/animations/animations.service';
export { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from './services/animations/route.animations';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  private static routeAnimationType: RouteAnimationType = 'PAGE';

  constructor() { }

  static isRouteAnimationsType(type: RouteAnimationType) {
    return AnimationsService.routeAnimationType === type;
  }

  updateRouteAnimationType(
    pageAnimations: boolean,
    elementAnimations: boolean,
  ) {
    AnimationsService.routeAnimationType =
      pageAnimations && elementAnimations
        ? 'ALL'
        : pageAnimations
          ? 'PAGE'
          : elementAnimations
            ? 'ELEMENTS'
            : 'NONE';
  }
}

export type RouteAnimationType = 'ALL' | 'PAGE' | 'ELEMENTS' | 'NONE';

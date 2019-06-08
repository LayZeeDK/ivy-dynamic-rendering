import { Component, NgModule } from '@angular/core';

import { dashboardDeps } from './dashboard.component';

@Component({
  selector: 'app-root',
  template: '<app-dashboard></app-dashboard>',
})
export class AppComponent {}


@NgModule({
  declarations: [
    AppComponent,
    dashboardDeps,
  ],
})
class AppRenderModule {}
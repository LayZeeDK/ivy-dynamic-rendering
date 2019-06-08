import { enableProdMode, Injector, ɵrenderComponent as renderComponent } from '@angular/core';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const rootInjector = Injector.create({
  name: 'root',
  providers: [],
});

renderComponent(AppComponent, {
  injector: rootInjector,
});

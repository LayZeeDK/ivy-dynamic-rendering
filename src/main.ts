import { enableProdMode, Injector, ɵrenderComponent as renderComponent } from '@angular/core';

import { AppComponent } from './app/app.component';
import { DynamicService } from './app/dynamic/dynamic.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const rootInjector = Injector.create({
  name: 'root',
  providers: [
    { provide: DynamicService, useClass: DynamicService },
  ],
});

renderComponent(AppComponent, {
  injector: rootInjector,
});

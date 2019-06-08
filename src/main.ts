import { enableProdMode, ɵrenderComponent as renderComponent } from '@angular/core';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

renderComponent(AppComponent);

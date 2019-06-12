import {
  Injectable,
  Injector,
  ɵrenderComponent as renderComponent,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicService {
  constructor(
    private injector: Injector,
  ) {}

  loadComponent(tag: string) {
    return import(`./${tag}.component`)
      .then(esModule => esModule.default)
      .then(ComponentType => {
        const tagName = ComponentType.ngComponentDef.selectors[0];
        const host = document.createElement(tagName);
        const component = renderComponent(ComponentType, {
          host,
          injector: this.injector,
        });
        
        return {
          component,
          host, 
        };
      });
  }
}

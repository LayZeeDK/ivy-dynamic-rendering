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

  loadComponent(container: HTMLElement, tag: string) {
    return import(`./${tag}.component`)
      .then(esModule => esModule.default)
      .then(ComponentType => {
        const element = document.createElement(`app-${tag}`);
        container.appendChild(element);
        renderComponent(ComponentType, {
          host: element,
          injector: this.injector,
        })
      });
  }
}

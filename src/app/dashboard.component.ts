import {
  Component,
  ElementRef,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
  ɵrenderComponent as renderComponent,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Dashboard</h1>
    <div #container></div>
  `,
})
export class DashboardComponent implements OnDestroy, OnInit {
  @ViewChild('container', { read: ElementRef, static: true })
  container: ElementRef;
  
  get containerElement(): HTMLElement {
    return this.container.nativeElement;
  }

  constructor(
    private injector: Injector,
  ) {}

  ngOnInit() {
    import('./dynamic/foo.component').then(({ FooComponent }) => {
      const element = document.createElement('app-foo');
      this.containerElement.appendChild(element);
      renderComponent(FooComponent, {
        host: element,
        injector: this.injector,
      });
    });
    console.log(this.injector);
  }

  ngOnDestroy() {
    Array.from(this.containerElement.children)
      .forEach(child => this.containerElement.removeChild(child));
  }
}

export const dashboardDeps = [
  DashboardComponent,
];

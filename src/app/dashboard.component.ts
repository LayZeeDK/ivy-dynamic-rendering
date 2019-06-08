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
    import('./dynamic/foo.component').then(({ default: FooComponent }) => {
      const element = document.createElement('app-foo');
      this.containerElement.appendChild(element);
      const componentInstance = renderComponent(FooComponent, {
        host: element,
        injector: this.injector,
      });
    })
  }

  ngOnDestroy() {
    Array.from(this.containerElement.children)
      .forEach(child => this.containerElement.removeChild(child));
  }
}

export const dashboardDeps = [
  DashboardComponent,
];

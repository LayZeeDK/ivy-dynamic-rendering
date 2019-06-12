import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { DynamicService } from './dynamic/dynamic.service';

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
    private dynamicService: DynamicService,
  ) {}

  ngOnInit() {
    this.dynamicService.loadComponent('foo')
      .then(({ host }) => this.containerElement.appendChild(host));
  }

  ngOnDestroy() {
    Array.from(this.containerElement.children)
      .forEach(child => this.containerElement.removeChild(child));
  }
}

export const dashboardDeps = [
  DashboardComponent,
];

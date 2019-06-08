import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-foo',
  template: `
    <p>
      foo works!
    </p>
  `,
  styles: []
})
export default class FooComponent {}

@NgModule({
  declarations: [
    FooComponent,
  ]
})
class FooRenderModule {}

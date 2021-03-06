# Angular In Depth workshop on dynamic rendering with Ivy
Built using these commands

```
ng new ivy-dynamic-rendering --enable-ivy=true --minimal=true --inline-style=true --inline-template=true --routing=false --style=css --skip-tests
cd ivy-dynamic-rendering
ng update @angular/core --next
```

## Lazy-loading plugin components and Angular modules in View Engine

[eval() + Compiler](https://github.com/kirjs/angular-dynamic-module-loading/blob/master/src/app/app.component.ts)

[SystemJS.import() + Compiler](https://stackoverflow.com/a/50395048/1071200)

[modules.json + SystemJS.import() + Compiler](https://github.com/lmeijdam/angular-umd-dynamic-example)

[SystemJS with AOT-compiled modules (no Compiler)](https://stackoverflow.com/a/45506470/1071200)

[<script type="module"> + dynamic import() with fallback to SystemJS.import()](https://medium.com/@camille_hdl/dynamic-import-of-es6-modules-with-fallback-to-systemjs-c72b30b8225e)

[Here is what you need to know about dynamic components in Angular by Max Koretskyi](https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e)

[It's Alive! Dynamic components in Angular by Shmula Jacobs](https://youtu.be/q2Exs-82tkw)

## Lazy-loading plugin components in Ivy
Dynamic `import()` statements are transpiled to promises by WebPack and need to be statically analyzable. This means that we don't get runtime dynamic imports. The experimental solution in this repository works with the Webpack development server supplied by Angular CLI, but doesn't work in production when you need runtime dynamic plugins such as loading a configuration from the a server or dynamic loading based on user input.

To do this, we would need to combine the experimental Ivy APIs with one of the solutions from the above resources. For example `SystemJS.import` or a `<script type="module">` loader.

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<a href="/appcom"><h4>Save the {{name}} </h4><a>`,
})
export class AppComponent1  { name = 'World....'; }
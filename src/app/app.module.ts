import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppComponent1 }  from './app.component';
import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, JsonpModule, FormsModule ],
  declarations: [ AppComponent, AppComponent1 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { Routing,RoutingComponents } from './app.router'

import { AppComponent } from './app.component';

import { TeluguIndustryService } from './telugu/telugu.service'

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Routing
  ],
  providers: [
    TeluguIndustryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

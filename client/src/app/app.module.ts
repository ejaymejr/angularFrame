import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavComponent }  from './components/nav/nav.component';
import { JsonService } from './components/service/json.service';
import { Router } from './router.component';
import { NotFoundComponent } from './notfound.component';
import { ProjectComponent } from './components/project.component';
import { HomeComponent } from './components/home.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, Router ],
  declarations: [ AppComponent
                  ,NavComponent 
                  ,NotFoundComponent
                  ,ProjectComponent
                  ,HomeComponent
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

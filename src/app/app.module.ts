import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {SeoService} from "./shared/services/seo.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ang4-seo'}),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
      SeoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

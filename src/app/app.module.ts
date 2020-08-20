import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlossaryPageComponent } from './glossary-page/glossary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SiteLayoutComponent,
    LoaderComponent,
    GlossaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

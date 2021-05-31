import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {SiteLayoutComponent} from './shared/layout/site-layout/site-layout.component';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GlossaryPageComponent} from './glossary-page/glossary-page.component';
import {GlossaryVnrapComponent} from './glossary-page/pages/glossary-vnrap/glossary-vnrap.component';
import {EcologyKnowledgeBasePageComponent} from './ecology-knowledge-base-page/ecology-knowledge-base-page.component';
import {ScientificResearchPageComponent} from './scientific-research-page/scientific-research-page.component';
import {ServicesPageComponent} from './services-page/services-page.component';
import {GlossaryUvpnComponent} from './glossary-page/pages/glossary-uvpn/glossary-uvpn.component';
import {GlossaryVonpsComponent} from './glossary-page/pages/glossary-vonps/glossary-vonps.component';
import {GlossaryMgComponent} from './glossary-page/pages/glossary-mg/glossary-mg.component';
import {TablesPageComponent} from './tables-page/tables-page.component';
import { MenuComponent } from './shared/layout/site-layout/menu/menu.component';
import { NationalCostsPageComponent } from './national-costs-page/national-costs-page.component';
import { SubstancesOfYearComponent } from './tables-page/substances-of-year/substances-of-year.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DataBaseComponent } from './data-base/data-base.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { MenuDataBaseComponent } from './shared/layout/site-layout/menu-data-base/menu-data-base.component';
import { ListItemIconComponent } from './shared/components/list-item-icon/list-item-icon.component';
import { AccordionComponent } from './shared/components/accordion/accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SiteLayoutComponent,
    LoaderComponent,
    GlossaryPageComponent,
    GlossaryVnrapComponent,
    EcologyKnowledgeBasePageComponent,
    ScientificResearchPageComponent,
    ServicesPageComponent,
    GlossaryUvpnComponent,
    GlossaryVonpsComponent,
    GlossaryMgComponent,
    TablesPageComponent,
    MenuComponent,
    NationalCostsPageComponent,
    SubstancesOfYearComponent,
    LoginPageComponent,
    DataBaseComponent,
    BreadcrumbsComponent,
    MenuDataBaseComponent,
    ListItemIconComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

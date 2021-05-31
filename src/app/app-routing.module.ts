import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainPageComponent} from './main-page/main-page.component';
import {SiteLayoutComponent} from './shared/layout/site-layout/site-layout.component';
import {GlossaryPageComponent} from './glossary-page/glossary-page.component';
import {GlossaryVnrapComponent} from './glossary-page/pages/glossary-vnrap/glossary-vnrap.component';
import {EcologyKnowledgeBasePageComponent} from './ecology-knowledge-base-page/ecology-knowledge-base-page.component';
import {ScientificResearchPageComponent} from './scientific-research-page/scientific-research-page.component';
import {ServicesPageComponent} from './services-page/services-page.component';
import {GlossaryUvpnComponent} from './glossary-page/pages/glossary-uvpn/glossary-uvpn.component';
import {GlossaryVonpsComponent} from './glossary-page/pages/glossary-vonps/glossary-vonps.component';
import {GlossaryMgComponent} from './glossary-page/pages/glossary-mg/glossary-mg.component';
import {TablesPageComponent} from './tables-page/tables-page.component';
import {NationalCostsPageComponent} from './national-costs-page/national-costs-page.component';
import {SubstancesOfYearComponent} from './tables-page/substances-of-year/substances-of-year.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DataBaseComponent} from "./data-base/data-base.component";

const routers: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'main', component: MainPageComponent},
      {path: 'glossary', component: GlossaryPageComponent},
      {path: 'glossary-vnrap', component: GlossaryVnrapComponent},
      {path: 'glossary-uvpn', component: GlossaryUvpnComponent},
      {path: 'glossary-vonps', component: GlossaryVonpsComponent},
      {path: 'glossary-mg', component: GlossaryMgComponent},
      {path: 'ecology-knowledge-base', component: EcologyKnowledgeBasePageComponent},
      {path: 'scientific-research', component: ScientificResearchPageComponent},
      {path: 'services', component: ServicesPageComponent},
      {path: 'national-emissions', component: TablesPageComponent},
      {path: 'national-emissions/year', component: SubstancesOfYearComponent},
      {path: 'national-waste', component: TablesPageComponent},
      {path: 'national-waste/year', component: SubstancesOfYearComponent},
      {path: 'national-costs', component: NationalCostsPageComponent},
      {path: 'data-base', component: DataBaseComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {SiteLayoutComponent} from './shared/layout/site-layout/site-layout.component';
import {GlossaryPageComponent} from './glossary-page/glossary-page.component';
import {GlossaryVnrapComponent} from './glossary-page/pages/glossary-vnrap/glossary-vnrap.component';

const routers: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MainPageComponent},
      {path: 'glossary', component: GlossaryPageComponent},
      {path: 'glossary-vnrap', component: GlossaryVnrapComponent}
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

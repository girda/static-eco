import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {SiteLayoutComponent} from './shared/layout/site-layout/site-layout.component';
import {GlossaryPageComponent} from './glossary-page/glossary-page.component';

const routers: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MainPageComponent},
      {path: 'glossary', component: GlossaryPageComponent},
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

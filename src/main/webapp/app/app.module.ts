import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BugTrackerJHipsterSharedModule } from 'app/shared/shared.module';
import { BugTrackerJHipsterCoreModule } from 'app/core/core.module';
import { BugTrackerJHipsterAppRoutingModule } from './app-routing.module';
import { BugTrackerJHipsterHomeModule } from './home/home.module';
import { BugTrackerJHipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { MyticketsComponent } from './mytickets/mytickets.component';

@NgModule({
  imports: [
    BrowserModule,
    BugTrackerJHipsterSharedModule,
    BugTrackerJHipsterCoreModule,
    BugTrackerJHipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BugTrackerJHipsterEntityModule,
    BugTrackerJHipsterAppRoutingModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    MyticketsComponent
  ],
  bootstrap: [MainComponent]
})
export class BugTrackerJHipsterAppModule {}

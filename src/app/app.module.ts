import { HeaderComponent } from './shared/components/header/header.component';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreService } from './core/services/core/core.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModulesModule } from './shared/shared-modules/shared-modules.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, SharedModulesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

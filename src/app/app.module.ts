import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcResponsiveComponent } from './barc-responsive/barc-responsive.component';
import { BarcCardComponent } from './barc-card/barc-card.component';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';


@NgModule({
  declarations: [
    AppComponent,
    BarcResponsiveComponent,
    BarcCardComponent,
    ScrollContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

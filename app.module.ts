import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBusComponent } from './components/add-bus/add-bus.component';
import { ViewBusComponent } from './components/view-bus/view-bus.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BusPipe } from './bus.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddBusComponent,
    ViewBusComponent,
    BusListComponent,
    BusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

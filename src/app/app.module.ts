import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpinionComponent } from './opinion/opinion.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    OpinionComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

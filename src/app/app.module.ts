import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestTableComponent } from './common/test-table/test-table.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    TestTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvgCalComponent } from './avg-cal/avg-cal.component';
import { FormsModule } from '@angular/forms';

import { RouterModule,Routes } from "@angular/router";

const routes: Routes = [
  { path: 'AvgCal', component: AvgCalComponent },
  { path: '',   redirectTo: '/AvgCal', pathMatch: 'full' },
  { path: '*',   redirectTo: '/AvgCal', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    AvgCalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FranchiseListPageComponent } from './franchise-list-page/franchise-list-page.component';
import { GetFranchisesService } from './get-franchises.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FranchiseListPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GetFranchisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

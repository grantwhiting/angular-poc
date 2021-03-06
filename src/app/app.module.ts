import { RouterModule } from '@angular/router';
import { FranchiseCartService } from './franchise-cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FranchiseListPageComponent } from './franchise-list-page/franchise-list-page.component';
import { GetFranchisesService } from './get-franchises.service';
import { HttpClientModule } from '@angular/common/http';
import { FranchiseCartComponent } from './franchise-cart/franchise-cart.component';
import { AppRoutingModule } from './/app-routing.module';
import { FranchiseDetailComponent } from './franchise-detail/franchise-detail.component';
import { FranchiseListComponent } from './franchise-list/franchise-list.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    FranchiseListPageComponent,
    FranchiseCartComponent,
    FranchiseDetailComponent,
    FranchiseListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    GetFranchisesService,
    FranchiseCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

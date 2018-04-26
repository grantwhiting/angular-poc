import { FranchiseCartServiceService } from './franchise-cart-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FranchiseListPageComponent } from './franchise-list-page/franchise-list-page.component';
import { GetFranchisesService } from './get-franchises.service';
import { HttpClientModule } from '@angular/common/http';
import { FranchiseCartComponent } from './franchise-cart/franchise-cart.component';
import { AppRoutingModule } from './/app-routing.module';
import { FranchiseDetailComponent } from './franchise-detail/franchise-detail.component';
import { FranchiseListComponent } from './franchise-list/franchise-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FranchiseListPageComponent,
    FranchiseCartComponent,
    FranchiseDetailComponent,
    FranchiseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GetFranchisesService,
    FranchiseCartServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

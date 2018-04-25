import { FranchiseDetailComponent } from './franchise-detail/franchise-detail.component';
import { FranchiseListPageComponent } from './franchise-list-page/franchise-list-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/franchise-opportunities', pathMatch: 'full'},
  { path: 'franchise-opportunities', component: FranchiseListPageComponent },
  { path: 'franchise-opportunities/:shortname', component: FranchiseDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

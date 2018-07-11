import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';

const appRoutes: Routes =[
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: MainLandingComponent },
  { path: 'accounts', component: AccountsListComponent },

  { path: '**', redirectTo: '/home' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainLandingComponent,
    SignUpComponent,
    AccountsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

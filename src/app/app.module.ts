import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { LoginComponent } from './components/login/login.component';
import { AccountListRowComponent } from './components/accounts-list/account-list-row/account-list-row.component';
import { NewAccountDialogComponent } from './components/accounts-list/new-account-dialog/new-account-dialog.component';
import { AccountDetailComponent } from './components/accounts-list/account-detail/account-detail.component';

const appRoutes: Routes =[
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainLandingComponent },
  { path: 'accounts', component: AccountsListComponent },
  { path: 'account/:accountId', component: AccountDetailComponent },

  { path: '**', redirectTo: '/home' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainLandingComponent,
    SignUpComponent,
    AccountsListComponent,
    LoginComponent,
    AccountListRowComponent,
    NewAccountDialogComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  entryComponents: [
    NewAccountDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

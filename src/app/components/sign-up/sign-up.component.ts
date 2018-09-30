import { Component, OnInit } from '@angular/core';
import { statesData } from './states';
import { SignUpService } from '../../services/sign-up.service';
import { AccountApplication } from '../../models/AccountApplication';
import { UserSignupRequest } from '../../models/UserSignupRequest';
import { Router } from '@angular/router';

class State {
  constructor(readonly abbr: string, readonly name: string) { }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  states: Array<State>;
  newAccountData: AccountApplication;
  newUserData: UserSignupRequest;
  isSubmitting: boolean;

  constructor(
    private signupServie: SignUpService,
    private router: Router
  ) {
    this.states = Object.keys(statesData).map((key) => {
      return new State(key, statesData[key]);
    });

    this.newAccountData = new AccountApplication();
    this.newUserData = new UserSignupRequest();
    this.isSubmitting = false;
  }

  executeUserSignup(): void {
    this.isSubmitting = true;
    this.signupServie.execute(this.newUserData, this.newAccountData)
      .then(() => {
        // need to redirect to accounts page, user is logged in
        this.isSubmitting = false;
        this.router.navigate(['/accounts']);
      })
      .catch((error) => {
        this.isSubmitting = false;
        alert(error.message);
      });
  }
}

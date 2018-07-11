import { Component, OnInit } from '@angular/core';
import { statesData } from './states';
import { SignUpService } from '../../services/sign-up.service';

class State {
  constructor(readonly abbr: string, readonly name: string) { }
}

class SignupApplication {
  emailAddress: string;
  password: string;
  firstName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: Number;
  accountName: string;
  accountType: string;
  startingBalance: Number;

  constructor() {
    this.state = "";
    this.accountType = "";
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  states: Array<State>;
  appData: SignupApplication;
  isSubmitting: boolean;

  constructor(private signupServie: SignUpService) {
    this.states = Object.keys(statesData).map((key) => {
      return new State(key, statesData[key]);
    });

    this.appData = new SignupApplication();
    this.isSubmitting = false;
  }

  submitApplication() {
    debugger;
    this.isSubmitting = true;
  }
}

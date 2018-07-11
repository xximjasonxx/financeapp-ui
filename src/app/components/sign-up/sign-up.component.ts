import { Component, OnInit } from '@angular/core';
import { statesData } from './states';
import { SignUpService } from '../../services/sign-up.service';
import { SignupApplication } from '../../models/SignupApplication';

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
    this.isSubmitting = true;
    this.signupServie.submitApplication(this.appData).subscribe((result) => {
      this.isSubmitting = false;
    });
  }
}

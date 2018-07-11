import { Component, OnInit } from '@angular/core';
import { statesData } from './states';

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

  constructor() {
    this.states = Object.keys(statesData).map((key) => {
      return new State(key, statesData[key]);
    });
  }
}

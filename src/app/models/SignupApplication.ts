
export class SignupApplication {
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
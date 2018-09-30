
export class UserSignupRequest {
    emailAddress: string;
    password: string;
    firstName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;

    constructor() {
        this.state = "";
    }
}
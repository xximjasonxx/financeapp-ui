import { Injectable } from '@angular/core';
import { SignupApplication } from '../models/SignupApplication';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor() { }

  submitApplication(data: SignupApplication) : Observable<boolean> {
    return of(true);
  }
}

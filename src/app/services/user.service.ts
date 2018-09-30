import { Injectable } from '@angular/core';
import { UserSignupRequest } from '../models/UserSignupRequest';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  createUser(userData: UserSignupRequest): Promise<UserInfo> {
    return this.httpClient.post<UserInfo>("https://financeapp-demo.azure-api.net/user", userData)
      .toPromise();
  }
}

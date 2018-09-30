import { Injectable } from '@angular/core';
import { UserSignupRequest } from '../models/UserSignupRequest';
import { AccountApplication } from '../models/AccountApplication';
import { UserService } from './user.service';
import { AccountsService } from './accounts.service';
import { ContextService } from './context.service';

import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(
    private userService: UserService,
    private accountsService: AccountsService,
    private contextService: ContextService
  )
  { }

  execute(userData: UserSignupRequest, accountData: AccountApplication): Promise<boolean | void> {
    return this.executeCreateUser(userData)
      .then((userInfo: UserInfo) => {
        debugger;
        this.contextService.setUserInfo(userInfo);
        return this.executeCreateAccount(accountData);
      })
      .then((applicationId: string) => {
        return true;
      });
  }

  executeCreateUser(userData: UserSignupRequest): Promise<UserInfo> {
    return this.userService.createUser(userData);
  }

  executeCreateAccount(accountData: AccountApplication): Promise<string> {
    debugger;
    return this.accountsService.createAccount(accountData);
  }
}

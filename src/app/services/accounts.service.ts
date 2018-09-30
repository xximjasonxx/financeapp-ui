import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountApplication } from '../models/AccountApplication';

import { ContextService } from './context.service';
import { AccountInfo } from '../models/AccountInfo';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(
    private httpClient: HttpClient,
    private contextService: ContextService
  ) { }

  createAccount(accountData: AccountApplication): Promise<string> {
    return this.httpClient.post<string>("https://financeapp-demo.azure-api.net/account", accountData, {
      headers: {
        "auth-key": this.contextService.getUserInfo().token
      }
    }).toPromise();
  }

  getAccounts(): Promise<Array<AccountInfo>> {
    return this.httpClient.get<Array<AccountInfo>>("https://financeapp-demo.azure-api.net/account", {
      headers: {
        "auth-key": this.contextService.getUserInfo().token
      }}).toPromise();
  }
}

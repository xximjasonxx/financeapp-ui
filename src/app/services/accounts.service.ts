import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountApplication } from '../models/AccountApplication';

import { ContextService } from './context.service';

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
    })
      .toPromise();
  }
}

import { Injectable } from '@angular/core';
import { TransactionInfo } from '../models/TransactionInfo';
import { HttpClient } from '@angular/common/http';
import { ContextService } from './context.service';
import { DepositRequest } from '../models/DepositRequest';
import { PaymentRequest } from '../models/PaymentRequest';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(
    private httpClient: HttpClient,
    private contextService: ContextService
  ) { }

  getTransactionsForAccount(accountId: string): Promise<Array<TransactionInfo>> {
    var url = "https://financeapp-demo.azure-api.net/transaction/account/" + accountId;
    return this.httpClient.get<Array<TransactionInfo>>(url, {
      headers: {
        "auth-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxOTc5MmZlNS00ZjAzLTQ2MDgtODIxNC1iM2I0OWUwOTUwNjAifQ.JLMGTk_AE7dQVsNGkDIHUbYMU7hM84bf4b87bdwesdk", //this.contextService.getUserInfo().token
      }}).toPromise();
  }

  submitDeposit(depositRequest: DepositRequest): Promise<string> {
    return this.httpClient.post("https://financeapp-demo.azure-api.net/transaction/deposit", depositRequest, {
      headers: {
        "auth-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxOTc5MmZlNS00ZjAzLTQ2MDgtODIxNC1iM2I0OWUwOTUwNjAifQ.JLMGTk_AE7dQVsNGkDIHUbYMU7hM84bf4b87bdwesdk", //this.contextService.getUserInfo().token
      },
      responseType: 'text'
    }).toPromise()
      .then((transactionId: string) => transactionId);
  }

  submitPayment(paymentRequest: PaymentRequest): Promise<string> {
    return this.httpClient.post("https://financeapp-demo.azure-api.net/transaction/withdraw", paymentRequest, {
      headers: {
        "auth-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxOTc5MmZlNS00ZjAzLTQ2MDgtODIxNC1iM2I0OWUwOTUwNjAifQ.JLMGTk_AE7dQVsNGkDIHUbYMU7hM84bf4b87bdwesdk", //this.contextService.getUserInfo().token
      },
      responseType: 'text'
    }).toPromise()
      .then((transactionId: string) => transactionId);
  }
}

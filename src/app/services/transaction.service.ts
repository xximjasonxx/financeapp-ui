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
        "auth-key": this.contextService.getUserInfo().token
      }}).toPromise();
  }

  submitDeposit(depositRequest: DepositRequest): Promise<string> {
    return this.httpClient.post("https://financeapp-demo.azure-api.net/transaction/deposit", depositRequest, {
      headers: {
        "auth-key": this.contextService.getUserInfo().token
      },
      responseType: 'text'
    }).toPromise()
      .then((transactionId: string) => transactionId);
  }

  submitPayment(paymentRequest: PaymentRequest): Promise<string> {
    return this.httpClient.post("https://financeapp-demo.azure-api.net/transaction/payment", paymentRequest, {
      headers: {
        "auth-key": this.contextService.getUserInfo().token
      },
      responseType: 'text'
    }).toPromise()
      .then((transactionId: string) => transactionId);
  }
}

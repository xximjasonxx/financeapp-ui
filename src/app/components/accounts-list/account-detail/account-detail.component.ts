import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../../services/accounts.service';
import { TransactionService } from '../../../services/transaction.service';
import { AccountInfo } from '../../../models/AccountInfo';
import { TransactionInfo } from '../../../models/TransactionInfo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepositDialogComponent } from '../../deposit-dialog/deposit-dialog.component';
import { PaymentDialogComponent } from '../../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  isLoading: boolean;
  accountInfo: AccountInfo;
  transactions: Array<TransactionInfo>;
  hasTransactions: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountsService: AccountsService,
    private transactionService: TransactionService,
    private modalService: NgbModal

  ) {
    this.isLoading = false;
    this.hasTransactions = false;
    this.transactions = [];
  }

  ngOnInit() {
    this.loadTransactionList();
  }

  makeDeposit(): void {
    var modalInstance = this.modalService.open(DepositDialogComponent);
    modalInstance.componentInstance.setSelectedAccount(this.accountInfo.accountId);
    
    modalInstance.result
      .then((result) => {
        if (result !== null)
          this.refreshList();
      });
  }

  makePayment(): void {
    var modalInstance = this.modalService.open(PaymentDialogComponent);
    modalInstance.componentInstance.setTargetAccount(this.accountInfo.accountId);

    modalInstance.result
      .then((result) => {
        if (result !== null)
          this.refreshList();
      });
  }

  refreshList(): void {
    this.transactions = [];
    this.loadTransactionList();
  }

  loadTransactionList(): void {
    this.isLoading = true;

    var accountId = this.activatedRoute.snapshot.params['accountId'];;
    Promise.all([
      this.accountsService.getAccount(accountId),
      this.transactionService.getTransactionsForAccount(accountId)
    ]).then(([accountResult, transactionsResult]) => {
      this.accountInfo = accountResult;
      this.transactions = transactionsResult;

      this.hasTransactions = transactionsResult.length > 0;
      this.isLoading = false;
    }).catch((error) => {
      this.isLoading = false;
      alert(error.message);
    });
  }
}

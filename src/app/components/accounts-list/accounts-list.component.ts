import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { AccountInfo } from '../../models/AccountInfo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewAccountDialogComponent } from './new-account-dialog/new-account-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  isLoading: boolean;
  accountList: Array<AccountInfo>;
  totalBalance: Number;

  constructor(
    private accountsService: AccountsService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.accountList = [];
    this.updateTotalBalance();
  }

  ngOnInit() {
    this.loadAccountList();
  }

  loadAccountList(): void {
    this.isLoading = true;
    this.accountsService.getAccounts()
      .then((accounts) => {
        this.accountList = accounts;
        this.updateTotalBalance();
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.updateTotalBalance();
        alert(error.message);
      });
  }

  addAccount(): void {
    this.modalService.open(NewAccountDialogComponent)
      .result
      .then((result) => {
        if (result != null) {
          this.refreshAccountList();
        }
      });
  }

  refreshAccountList(): void {
    this.accountList = [];
    this.loadAccountList();
  }

  selectAccount(account: AccountInfo): void {
    this.router.navigate(['/account', account.accountId]);
  }

  updateTotalBalance() {
    if (!this.accountList || this.accountList.length === 0) {
      this.totalBalance = 0;
    }
    else {
      this.totalBalance = this.accountList
        .map((info) => info.currentBalance)
        .reduce((total, value) => {
          return Number(total) + Number(value);
        });
    }
  }
}

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
    /*this.isLoading = true;
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
      });*/

      this.accountList = [
        {
            "accountId": "ad419bbb-eafa-4442-9964-25dede328d55",
            "accountName": "Main Checking",
            "currentBalance": 1000,
            "statusCode": 1,
            "status": "Open",
            "accountType": "checking"
        },
        {
            "accountId": "1ad0aee5-e639-49a8-8585-e9805bbb58d3",
            "accountName": "My Retirement",
            "currentBalance": 100000,
            "statusCode": 1,
            "status": "Open",
            "accountType": "market"
        },
        {
            "accountId": "02aef26b-4b38-4ecd-9e23-f8fa7167dee8",
            "accountName": "My Savings",
            "currentBalance": 40000,
            "statusCode": 1,
            "status": "Open",
            "accountType": "savings"
        }
    ];
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

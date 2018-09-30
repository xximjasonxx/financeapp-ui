import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { AccountInfo } from '../../models/AccountInfo';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  isLoading: boolean;
  accountList: Array<AccountInfo>;

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.accountsService.getAccounts()
      .then((accounts) => {
        this.accountList = accounts;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        alert(error.message);
      });
  }
}

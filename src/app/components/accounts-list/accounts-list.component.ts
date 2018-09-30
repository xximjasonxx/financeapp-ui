import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { AccountInfo } from '../../models/AccountInfo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewAccountDialogComponent } from './new-account-dialog/new-account-dialog.component';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  isLoading: boolean;
  accountList: Array<AccountInfo>;

  constructor(
    private accountsService: AccountsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.loadAccountList();
  }

  loadAccountList(): void {
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
}

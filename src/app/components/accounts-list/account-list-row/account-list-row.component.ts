import { Component, Input } from '@angular/core';
import { AccountInfo } from '../../../models/AccountInfo';

@Component({
  selector: 'account-list-row',
  templateUrl: './account-list-row.component.html',
  styleUrls: ['./account-list-row.component.css']
})
export class AccountListRowComponent {
  @Input()
  accountInfo: AccountInfo

  constructor() {
  }

  isOpen(): boolean {
    return this.accountInfo.statusCode == 1;
  }

  isClosed(): boolean {
    return this.accountInfo.statusCode == 3;
  }

  isPending(): boolean {
    return this.accountInfo.statusCode == 0;
  }

  startDeposit
}

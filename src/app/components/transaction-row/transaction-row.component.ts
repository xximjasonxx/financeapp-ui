import { Component, Input } from '@angular/core';
import { TransactionInfo } from '../../models/TransactionInfo';

@Component({
  selector: 'transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent {
  @Input()
  transactionInfo: TransactionInfo;

  constructor() {}

  isApproved(): boolean {
    return this.transactionInfo.statusCode === 1;
  }

  isPending(): boolean {
    return this.transactionInfo.statusCode === 0;
  }

  isRejected(): boolean {
    return this.transactionInfo.statusCode === 2;
  }
}

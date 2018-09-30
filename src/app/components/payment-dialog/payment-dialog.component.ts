import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionService } from '../../services/transaction.service';
import { PaymentRequest } from '../../models/PaymentRequest';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent {
  payee: string;
  targetAccount: string;
  paymentAmount: Number;
  isBusy: boolean;

  constructor(
    private activeModal: NgbActiveModal,
    private transactionService: TransactionService
  ) {
    this.isBusy = false;
  }

  setTargetAccount(accountId: string) {
    this.targetAccount = accountId;
  }

  makePayment(): void {
    var request = new PaymentRequest();
    request.amount = this.paymentAmount;
    request.payee = this.payee;
    request.targetAccount = this.targetAccount;

    this.isBusy = true;
    this.transactionService.submitPayment(request)
      .then((transactionId) => {
        this.isBusy = false;
        this.activeModal.close(transactionId);
      })
      .catch((error) => {
        this.isBusy = false;
        alert(error.message);
      })
  }
}

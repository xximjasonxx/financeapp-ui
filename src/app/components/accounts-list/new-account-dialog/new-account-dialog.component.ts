import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountApplication } from '../../../models/AccountApplication';
import { AccountsService } from '../../../services/accounts.service';

@Component({
  selector: 'new-account-dialog',
  templateUrl: './new-account-dialog.component.html',
  styleUrls: ['./new-account-dialog.component.css']
})
export class NewAccountDialogComponent {
  accountData: AccountApplication;
  isBusy: boolean;

  constructor(
    private activeModal: NgbActiveModal,
    private accountsSevice: AccountsService
  ) {
    this.accountData = new AccountApplication();
  }

  openAccount(): void {
    this.isBusy = true;
    this.accountsSevice.createAccount(this.accountData)
      .then((result) => {
        this.isBusy = false;
        this.activeModal.close(result);
      })
      .catch((error) => {
        this.isBusy = false;
        alert(error.message);
      });
  }

  closeModal(): void {
    this.activeModal.close(null);
  }
}

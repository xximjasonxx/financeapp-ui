import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionService } from '../../services/transaction.service';
import { DepositRequest } from '../../models/DepositRequest';

@Component({
  selector: 'app-deposit-dialog',
  templateUrl: './deposit-dialog.component.html',
  styleUrls: ['./deposit-dialog.component.css']
})
export class DepositDialogComponent {
  selectedFile: File;
  depositSource: string;

  selectedAccount: string;
  isBusy: boolean;

  constructor(
    private activeModal: NgbActiveModal,
    private transactionService: TransactionService
  ) {
    this.isBusy = false;
  }

  closeModal(): void {
    this.activeModal.close(null);
  }

  onFileChange(event): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  setSelectedAccount(accountId: string) {
    this.selectedAccount = accountId;
  }

  makeDeposit(): void {
    if (this.selectedFile) {
      let reader = new FileReader();
      this.isBusy = true;
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.sendDeposit(reader.result.toString().split(',')[1])
          .then((result) => {
            this.activeModal.close(result);
          })
          .catch((error) => {
            this.isBusy = false;
            alert(error.message);
          });
      };

      reader.onerror = () => {
        this.isBusy = false;
        alert("Failed to read file");
      }
    }
  }

  sendDeposit(base64File: string): Promise<string> {
    var request = new DepositRequest();
    request.DepositImage = base64File;
    request.TargetAccount = this.selectedAccount;
    request.Source = this.depositSource;

    return this.transactionService.submitDeposit(request);
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PartnerService } from '../service/partner.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-partner',
  standalone: false,
  templateUrl: './delete-partner.component.html',
  styleUrl: './delete-partner.component.css'
})
export class DeletePartnerComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePartnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { partnerId: number },
    private partnerService: PartnerService,
    private snackBar: MatSnackBar
  ) {}

  onDelete(): void {
    this.partnerService.deletePartner(this.data.partnerId).subscribe({
      next: () => {
        this.snackBar.open('Partner deleted successfully!', 'Close', {
          duration: 3000
        });
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.snackBar.open(err, 'Close', {
          duration: 5000,
          panelClass: ['snackbar-error']
        });
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

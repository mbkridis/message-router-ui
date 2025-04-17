import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PartnerService } from '../service/partner.service';

@Component({
  selector: 'app-add-partner',
  standalone: false,
  templateUrl: './add-partner.component.html',
  styleUrl: './add-partner.component.css'
})
export class AddPartnerComponent {
  public newPartner = {
    alias: '',
    type: '',
    direction: '',
    application: '',
    processedFlowType: '',
    description: ''
  };
  directions: string[] = ['INBOUND', 'OUTBOUND'];
  processedFlowTypes: string[] = ['MESSAGE', 'ALERTING', 'NOTIFICATION'];
  constructor(
    public dialogRef: MatDialogRef<AddPartnerComponent>,
    private partnerService: PartnerService
  ) {}
  onAddPartner(): void {
    this.partnerService.addPartner(this.newPartner).subscribe(
      () => {
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Erreur lors de l\'add partner', error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

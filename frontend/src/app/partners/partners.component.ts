import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PartnerService } from './service/partner.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletePartnerComponent } from './delete-partner/delete-partner.component';
import { AddPartnerComponent } from './add-partner/add-partner.component';

@Component({
  selector: 'app-partners',
  standalone: false,
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent implements OnInit, AfterViewInit{
  public partners : any;
  public dataSource : any;
  public displayedColumns : string[] =["id","alias","type","direction","application","processedFlowType","description","actions"];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private router : Router, private dialog: MatDialog, private partnerService: PartnerService){
  }
  ngOnInit(): void {
    this.loadPartners();
    this.dataSource = new MatTableDataSource(this.partners)
  }

  loadPartners(page: number = 0, size: number = 50): void {
    this.partnerService.getPartners(page, size).subscribe(
      (response) => {
        this.partners = response.content;
        this.dataSource.data = this.partners;
      },
      (error) => {
        console.error('Erreur de chargement des messages', error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterPartners(event : Event) : void {
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  openDeleteConfirmation(partnerId: number): void {
    const dialogRef = this.dialog.open(DeletePartnerComponent, {
      data: { partnerId }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPartners();
      }
    });
  }

  openAddPartnerDialog(): void {
    const dialogRef = this.dialog.open(AddPartnerComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPartners();
      }
    });
  }
  
  

}

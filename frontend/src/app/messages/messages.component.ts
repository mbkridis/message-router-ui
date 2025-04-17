import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MessageDetailComponent } from '../message-detail/message-detail.component';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  public messages : any;
  public dataSource : any;
  public displayedColumns : string[] =["id","received_at","content","partner_id","details"];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private router : Router, private dialog: MatDialog, private messageService: MessageService){
  }
  ngOnInit(): void {
    this.loadMessages(); 
    this.dataSource = new MatTableDataSource(this.messages)
  }

  loadMessages(page: number = 0, size: number = 50): void {
    this.messageService.getMessages(page, size).subscribe(
      (response) => {
        this.messages = response.content;
        this.dataSource.data = this.messages;
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

  filterMessages(event : Event) : void {
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  getMessageDetails(message : any) : void {
    const dialogRef = this.dialog.open(MessageDetailComponent, {
      width: '500px',
      data: message // Passe les données du message à la popin
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddInterviewComponent } from '../add-interview/add-interview.component';

@Component({
  selector: 'app-company-interview',
  templateUrl: './company-interview.component.html',
  styleUrls: ['./company-interview.component.scss']
})
export class CompanyInterviewComponent implements OnInit {
  dilogRef: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(AddInterviewComponent, {
      data: {
      }
    });
  }

}

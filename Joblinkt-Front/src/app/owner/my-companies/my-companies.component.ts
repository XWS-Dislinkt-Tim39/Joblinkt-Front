import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentComponent } from 'src/app/companies/add-comment/add-comment.component';
import { EditCompanyInfoComponent } from 'src/app/companies/edit-company-info/edit-company-info.component';

@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.component.html',
  styleUrls: ['./my-companies.component.scss']
})
export class MyCompaniesComponent implements OnInit {
  dilogRef: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(EditCompanyInfoComponent, {
      data: {
      }
    });
  }

}

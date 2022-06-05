import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentComponent } from '../add-comment/add-comment.component';

@Component({
  selector: 'app-company-comments',
  templateUrl: './company-comments.component.html',
  styleUrls: ['./company-comments.component.scss']
})
export class CompanyCommentsComponent implements OnInit {
  dilogRef: any;
  company:any;
  comments:any[]=[]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCompanyInfo();
  }
  openAddDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(AddCommentComponent, {
      data: {
      }
    });
  }

  getCompanyInfo(){
    this.company= JSON.parse(localStorage.getItem('selectedCompany') || '');
    this.comments=this.company.comments;
  }

}

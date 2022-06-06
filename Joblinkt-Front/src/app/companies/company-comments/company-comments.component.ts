import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/core/services/company.service';
import { AddCommentComponent } from '../add-comment/add-comment.component';

@Component({
  selector: 'app-company-comments',
  templateUrl: './company-comments.component.html',
  styleUrls: ['./company-comments.component.scss']
})
export class CompanyCommentsComponent implements OnInit {
  dilogRef: any;
  company:any;
  id:any;
  averageGrade:number=0;
  comments:any[]=[]
  constructor(public dialog: MatDialog,
    private companyService:CompanyService) { }

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
    this.id= JSON.parse(localStorage.getItem('selectedCompany') || '').id;
    this.companyService.getCompanyInfo(this.id).subscribe(data=>{
      this.company=data;
      this.calculateAverageGrade();
    },error=>{
      alert('Error!')
    })
  }

  calculateAverageGrade(){
    if(this.company?.comments.length>0){
      this.company.comments.forEach((value: any, i: any) => {
        this.averageGrade=this.averageGrade+value.grade;
      });
      this.averageGrade=this.averageGrade/this.company.comments.length;
    }
   
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/core/services/company.service';
import { EditCompanyInfoComponent } from '../edit-company-info/edit-company-info.component';

@Component({
  selector: 'app-company-about',
  templateUrl: './company-about.component.html',
  styleUrls: ['./company-about.component.scss']
})
export class CompanyAboutComponent implements OnInit {
  dilogRef: any;
  company:any;
  id:any;
  averageGrade:number=0;
  constructor(public dialog: MatDialog,
    private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getCompanyInfo();
    this.calculateAverageGrade();
  }
  openAddDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(EditCompanyInfoComponent, {
      data: {
        selectedCompany:this.company
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

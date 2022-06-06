import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/core/services/company.service';
import { JobOfferService } from 'src/app/core/services/job-offer.service';
import { JwtService } from 'src/app/core/services/jwt.service';
import { AddJobOfferComponent } from '../add-job-offer/add-job-offer.component';
import { JobViewComponent } from '../job-view/job-view.component';

@Component({
  selector: 'app-company-jobs',
  templateUrl: './company-jobs.component.html',
  styleUrls: ['./company-jobs.component.scss']
})
export class CompanyJobsComponent implements OnInit {
  dilogRef: any;
  company:any;
  id:any;
  averageGrade:number=0;
  jobs:any[]=[];
  ownerId:any;
  constructor(public dialog: MatDialog,
    private jwtService:JwtService,
    private jobService:JobOfferService,
    private companyService:CompanyService) { }

  ngOnInit(): void {
    this.ownerId=this.jwtService.getUserId();
    this.getCompanyInfo();
  }
  openViewDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(JobViewComponent, {
      data: {
      }
    });
  }
  openAddDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(AddJobOfferComponent, {
      data: {
      }
    });
  }

  getCompanyInfo(){
    this.id= JSON.parse(localStorage.getItem('selectedCompany') || '').id;
    this.companyService.getCompanyInfo(this.id).subscribe(data=>{
      this.company=data;
      this.calculateAverageGrade();
      this.getJobsByCompany();
    },error=>{
      alert('Error!')
    })
  }

  getJobsByCompany(){
    this.jobService.getAllByCompany(this.id).subscribe(data=>{
      this.jobs=data;
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

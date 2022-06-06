import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCommentComponent } from 'src/app/companies/add-comment/add-comment.component';
import { EditCompanyInfoComponent } from 'src/app/companies/edit-company-info/edit-company-info.component';
import { CompanyService } from 'src/app/core/services/company.service';
import { JwtService } from 'src/app/core/services/jwt.service';
import { AddCompanyComponent } from '../add-company/add-company.component';

@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.component.html',
  styleUrls: ['./my-companies.component.scss']
})
export class MyCompaniesComponent implements OnInit {
  dilogRef: any;
  comapnies:any[]=[];
  myCompanies:any[]=[];
  ownerId:any;
  constructor(public dialog: MatDialog,
    private companyService:CompanyService,
    private router:Router,
    private jwtService:JwtService) { }

  ngOnInit(): void {
    this.ownerId=this.jwtService.getUserId();
    this.getMyCompanies();
  }
  openAddDialog(event: { stopPropagation: () => void; }) {
    this.dilogRef = this.dialog.open(AddCompanyComponent, {
      data: {
      }
    });
  }

  getMyCompanies(){
    this.companyService.getAllCompaniesbyOwner(this.ownerId).subscribe(data=>{
      this.comapnies=data;
      this.comapnies.forEach((value: any, i: any) => {
        if(value.isApproved){
          this.myCompanies.push(value);
        }
      });
    },error=>{
      alert('Error! Try again!');
    })
  }

  viewCompany(company:any){
    localStorage.removeItem('selectedCompany');
    localStorage.setItem('selectedCompany', JSON.stringify(company));
    this.router.navigate(['/company-about']);  
  }

}

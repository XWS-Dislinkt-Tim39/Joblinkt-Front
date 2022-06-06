import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/core/services/company.service';
import { JwtService } from 'src/app/core/services/jwt.service';
export interface PeriodicElement {
  position: string;
  level: string;
  average: number;
  min: number;
  max: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: "Software Developer", level:"Junior",average:750,min:600,max:1000},
  {position: "Software Developer", level:"Medior",average:1300,min:1000,max:1600},
  {position: "Product Menager", level:"Senior",average:2000,min:1600,max:2300},
];
@Component({
  selector: 'app-company-requests',
  templateUrl: './company-requests.component.html',
  styleUrls: ['./company-requests.component.scss']
})
export class CompanyRequestsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'level',  'min','max'];
  dataSource = ELEMENT_DATA;
  dilogRef: any;
  comapnies:any[]=[];
  nonRegisteredCompanies:any[]=[];
  ownerId:any;
  constructor(
    private companyService:CompanyService,
    private jwtService:JwtService) { }
  ngOnInit(): void {
    this.getCompanies();
   
  }

    getCompanies(){
    this.companyService.getAllUnregisteredCompanies().subscribe(data=>{
      this.comapnies=data;
      this.dataSource=this.comapnies;
      
    },error=>{
      alert('Error! Try again!');
    })

  }
 
  accept(row:any){
    alert(row.id)
    this.companyService.approveCompany(row.id).subscribe(data=>{
      alert('Succesfully');
      window.location.reload();
    },error=>{
      alert('Error!')
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/core/services/company.service';
import { JwtService } from 'src/app/core/services/jwt.service';

@Component({
  selector: 'app-non-registered',
  templateUrl: './non-registered.component.html',
  styleUrls: ['./non-registered.component.scss']
})
export class NonRegisteredComponent implements OnInit {
  comapnies:any[]=[];
  nonRegisteredCompanies:any[]=[];
  ownerId:any;
  constructor(
    private companyService:CompanyService,
    private jwtService:JwtService) { }

  ngOnInit(): void {
    this.ownerId=this.jwtService.getUserId();
    this.getMyCompanies();
  }

  getMyCompanies(){
    this.companyService.getAllCompaniesbyOwner(this.ownerId).subscribe(data=>{
      this.comapnies=data;
      alert(this.comapnies.length)
      this.comapnies.forEach((value: any, i: any) => {
  
        if(value.isApproved==false){
          alert(value.name)
          this.nonRegisteredCompanies.push(value);
        }
      });
    },error=>{
      alert('Error! Try again!');
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewSalary } from 'src/app/core/models/new-salary.model';
import { CompanyReviewService } from 'src/app/core/services/company-review.service';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss']
})
export class AddSalaryComponent implements OnInit {
  form:FormGroup;
  company:any;
  level:any;
  newSalary:NewSalary={
    position:'',
    positionLevel:'',
    salary:0,
    copmanyId:'',
    dateOfPublishing:new Date()
  }
  constructor(private formBuilder: FormBuilder,
    private companyService:CompanyReviewService,
    private dialogRef: MatDialogRef<AddSalaryComponent>) { 
      this.form = this.formBuilder.group({
        position: [''],
        level: [''],
        salary:['']
      });
    }

  
    ngOnInit(): void {
      this.getCompanyInfo();
    }
  
    addSalary() {
      this.newSalary.position=this.form.value.position;
      this.newSalary.positionLevel=this.level;
      this.newSalary.salary=this.form.value.grade;
     
      this.newSalary.copmanyId=this.company.id;
      console.log(this.newSalary);
      this.companyService.addSalary(this.newSalary).subscribe(data=>{
        alert('Successfully added new salary');
      },error=>{
        alert('Error!')
      })
  
    }
    getCompanyInfo(){
      this.company= JSON.parse(localStorage.getItem('selectedCompany') || '');
     
      
    }

}

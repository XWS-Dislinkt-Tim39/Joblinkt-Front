import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewInterviewProcess } from 'src/app/core/models/new-interview-proccess.model';
import { CompanyReviewService } from 'src/app/core/services/company-review.service';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent implements OnInit {
  form:FormGroup;
  company:any;
  level:any;
  newInterview:NewInterviewProcess={
    position:'',
    positionLevel:'',
    grade:0,
    techicalInterview:'',
    HRInterview:'',
    copmanyId:'',
    dateOfPublishing:new Date()
  }
  constructor(private formBuilder: FormBuilder,
    private companyService:CompanyReviewService,
    private dialogRef: MatDialogRef<AddInterviewComponent>) { 
      this.form = this.formBuilder.group({
        position: [''],
        level: [''],
        grade:[''],
        HRInterview: [''],
        technicalInterview: ['']
      });
    }

  ngOnInit(): void {
    this.getCompanyInfo();
  }

  addInterview() {
    this.newInterview.position=this.form.value.position;
    this.newInterview.positionLevel=this.level;
    this.newInterview.grade=this.form.value.grade;
    this.newInterview.techicalInterview=this.form.value.positive;
    this.newInterview.HRInterview=this.form.value.negative;
    this.newInterview.copmanyId=this.company.id;
    console.log(this.newInterview);
    this.companyService.addInterviewProcess(this.newInterview).subscribe(data=>{
      alert('Successfully added new comment');
    },error=>{
      alert('Error!')
    })

  }
  getCompanyInfo(){
    this.company= JSON.parse(localStorage.getItem('selectedCompany') || '');
   
    
  }

}

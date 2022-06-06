import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewJobOffer } from 'src/app/core/models/new-job-offer.model';
import { CompanyService } from 'src/app/core/services/company.service';
import { JobOfferService } from 'src/app/core/services/job-offer.service';
import { JwtService } from 'src/app/core/services/jwt.service';

@Component({
  selector: 'app-add-job-offer',
  templateUrl: './add-job-offer.component.html',
  styleUrls: ['./add-job-offer.component.scss']
})
export class AddJobOfferComponent implements OnInit {
  form: FormGroup;
  userId: string = "";
  startDateTime:Date=new Date();
  endDateTime:Date=new Date();
  newJobOffer: NewJobOffer= {
    startDateTime:new Date(),
    endDateTime:new Date(),
    userId: "",
    companyId: "",
    positionName: "",
    description: "",
    dailyActivities: [''],
    requirements: [''],
    isPostedOnDislinkt:false
  }
  company:any;
  checked:any=false;
  id:any;
  activities:any[]=[];
  requirements:any[]=[];
  constructor(  
    private formBuilder: FormBuilder,
    private jwtService : JwtService,
    private jobOfferService:JobOfferService,
    private companyService:CompanyService,
    private dialogRef: MatDialogRef<AddJobOfferComponent>) 
    { 
    this.form = this.formBuilder.group({
      startDateTime:[''],
      endDateTime:[''],
      positionName: [''],
      description: [''],
      dailyActivities: [''],
      requirements: ['']
    });
  }
  get addForm(): { [key: string]: AbstractControl; } { return this.form.controls; }

  ngOnInit(): void {
    this.userId = this.jwtService.getUserId();
    this.getCompanyInfo();
  }
  getCompanyInfo(){
    this.id= JSON.parse(localStorage.getItem('selectedCompany') || '').id;
    this.companyService.getCompanyInfo(this.id).subscribe(data=>{
      this.company=data;
    },error=>{
      alert('Error!')
    })
  }

  addActivity(){
    this.activities.push(this.form.value.dailyActivities);
    this.form.get('dailyActivities')?.setValue('');
  }
  addRequirements(){
    this.requirements.push(this.form.value.requirements);
    this.form.get('requirements')?.setValue('');
  }
  addJobOffer() {
    if (this.form.invalid) {
      return;
    }
    this.newJobOffer.startDateTime=this.startDateTime;
    this.newJobOffer.endDateTime=this.endDateTime;
    this.newJobOffer.userId = this.userId;
    this.newJobOffer.companyId = this.id;
    this.newJobOffer.positionName = this.form.value.positionName;
    this.newJobOffer.description = this.form.value.description;
    this.newJobOffer.dailyActivities = this.activities;
    this.newJobOffer.requirements = this.requirements;
    console.log(this.newJobOffer)
    this.jobOfferService.addJobOffer(this.newJobOffer).subscribe(data => {
      alert('Sucessfully added new job offer');
      window.location.reload();
    }, error => {
      console.log(error.error);
      alert('Error! Try again');
    });
  }

}

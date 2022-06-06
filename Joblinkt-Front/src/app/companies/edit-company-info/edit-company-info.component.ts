import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCompany } from 'src/app/core/models/edit-company.model';
import { CompanyService } from 'src/app/core/services/company.service';
import { AddCommentComponent } from '../add-comment/add-comment.component';

@Component({
  selector: 'app-edit-company-info',
  templateUrl: './edit-company-info.component.html',
  styleUrls: ['./edit-company-info.component.scss']
})
export class EditCompanyInfoComponent implements OnInit {
  form: FormGroup;
  company: any;
  editedCompany:EditCompany={
    id:'',
    name: '',
    address:'',
    city:'',
    country:'',
    phoneNumber:'',
    description:'',
    category: '',
    email:''
  }
  constructor(private formBuilder: FormBuilder,
    private companyService:CompanyService,
    private dialogRef: MatDialogRef<AddCommentComponent>,
    private dialogRef1: MatDialogRef<EditCompanyInfoComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.form = this.formBuilder.group({
      name: [''],
      industry: [''],
      address: [''],
      city: [''],
      country: [''],
      phone: [''],
      email: [''],
      description: ['']
    });
    this.company = data.selectedCompany;

  }

  get fGeneral(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.setFields();
  }

  setFields() {
    this.form.get('name')?.setValue(this.company.name);
    this.form.get('industry')?.setValue(this.company.category);
    this.form.get('address')?.setValue(this.company.address);
    this.form.get('city')?.setValue(this.company.city);
    this.form.get('country')?.setValue(this.company.country);
    this.form.get('phone')?.setValue(this.company.phoneNumber);
    this.form.get('email')?.setValue(this.company.email);
    this.form.get('description')?.setValue(this.company.description);
  }

  saveCompany(){
    this.editedCompany.id=this.company.id;
    this.editedCompany.name=this.form.value.name;
    this.editedCompany.category=this.form.value.industry;
    this.editedCompany.address=this.form.value.address;
    this.editedCompany.city=this.form.value.city;
    this.editedCompany.country=this.form.value.country;
    this.editedCompany.email=this.form.value.email;
    this.editedCompany.description=this.form.value.description;
    this.editedCompany.phoneNumber=this.form.value.phoneNumber;
    console.log(this.editedCompany);
    this.companyService.editAboutInfo(this.editedCompany).subscribe(data=>{
      alert('succesfully edited');
      window.location.reload();
    },error=>{
      alert('Error!Try again!')
    })

  }

}

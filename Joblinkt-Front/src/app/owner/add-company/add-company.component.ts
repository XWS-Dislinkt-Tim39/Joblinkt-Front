import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewComment } from 'src/app/core/models/new-comment.model';
import { NewCompany } from 'src/app/core/models/new-company.model';
import { CompanyService } from 'src/app/core/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  form: FormGroup;
  newCompany: NewCompany = {
    name: '',
    industry: '',
    address: '',
    city: '',
    country: '',
    phoneNumber: '',
    email: '',
    description: '',
    ownerId: '',
    isApproved: false

  }

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCompanyComponent>,
    private companyService: CompanyService) {
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
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  registerCompany() {
    this.newCompany.name = this.form.value.name;
    this.newCompany.industry = this.form.value.industry;
    this.newCompany.address = this.form.value.address;
    this.newCompany.city = this.form.value.city;
    this.newCompany.country = this.form.value.country;
    this.newCompany.phoneNumber = this.form.value.phone;
    this.newCompany.email = this.form.value.email;
    this.newCompany.description = this.form.value.description;
    this.newCompany.ownerId = '12154'
    console.log(this.newCompany);
/*
    this.companyService.sendCompanyRequest(this.newCompany).subscribe(
      (data: any) => {
        alert('Successfully sent register comapny request')
      },
      (error) => {
        console.log(error.error.message);
      });*/
  }


}


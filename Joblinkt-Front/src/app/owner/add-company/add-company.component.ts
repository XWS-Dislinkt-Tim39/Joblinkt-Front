import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCompanyComponent>) {
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

}

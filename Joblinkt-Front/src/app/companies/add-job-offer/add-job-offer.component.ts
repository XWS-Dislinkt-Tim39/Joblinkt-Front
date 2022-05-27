import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-job-offer',
  templateUrl: './add-job-offer.component.html',
  styleUrls: ['./add-job-offer.component.scss']
})
export class AddJobOfferComponent implements OnInit {
  form: FormGroup;
  constructor(  
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddJobOfferComponent>) 
    { 
    this.form = this.formBuilder.group({
      text: [''],
      image: [''],
      link: ['']
    });
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddCommentComponent } from '../add-comment/add-comment.component';
@Component({
  selector: 'app-edit-company-info',
  templateUrl: './edit-company-info.component.html',
  styleUrls: ['./edit-company-info.component.scss']
})
export class EditCompanyInfoComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCommentComponent>) {
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
  }

}

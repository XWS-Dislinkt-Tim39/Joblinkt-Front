import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss']
})
export class AddSalaryComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddSalaryComponent>) { 
      this.form = this.formBuilder.group({
        position: [''],
        level: [''],
        grade:['']
      });
    }

  ngOnInit(): void {
  }

}

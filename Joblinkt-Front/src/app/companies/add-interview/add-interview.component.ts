import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddInterviewComponent>) { 
      this.form = this.formBuilder.group({
        position: [''],
        level: [''],
        positive: [''],
        negative: ['']
      });
    }

  ngOnInit(): void {
  }

}

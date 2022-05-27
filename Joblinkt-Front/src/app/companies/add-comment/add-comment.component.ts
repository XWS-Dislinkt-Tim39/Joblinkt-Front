import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
form:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCommentComponent>) {
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewComment } from 'src/app/core/models/new-comment.model';
import { CompanyReviewService } from 'src/app/core/services/company-review.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  level: any;
  company:any;
  newComment: NewComment = {
    position: '',
    positionLevel: '',
    grade: 0,
    positive: '',
    negative: '',
    copmanyId: '',
    dateOfPublishing: new Date()
  }
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private companyService:CompanyReviewService,
    private dialogRef: MatDialogRef<AddCommentComponent>) {
    this.form = this.formBuilder.group({
      position: [''],
      level: [''],
      grade:[''],
      positive: [''],
      negative: ['']
    });
  }

  ngOnInit(): void {
    this.getCompanyInfo();
  }

  addComment() {
    this.newComment.position=this.form.value.position;
    this.newComment.positionLevel=this.level;
    this.newComment.grade=this.form.value.grade;
    this.newComment.positive=this.form.value.positive;
    this.newComment.negative=this.form.value.negative;
    this.newComment.copmanyId=this.company.id;
    console.log(this.newComment);
    this.companyService.addComment(this.newComment).subscribe(data=>{
      alert('Successfully added new comment');
    },error=>{
      alert('Error!')
    })

  }
  getCompanyInfo(){
    this.company= JSON.parse(localStorage.getItem('selectedCompany') || '');
   
    
  }

}

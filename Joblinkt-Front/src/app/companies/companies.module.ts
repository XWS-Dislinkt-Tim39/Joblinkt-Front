import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCompanyComponent } from './search-company/search-company.component';
import { SharedModule } from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CompanyAboutComponent } from './company-about/company-about.component';
import { CompanyCommentsComponent } from './company-comments/company-comments.component';
import { CompanyInterviewComponent } from './company-interview/company-interview.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { CompanySalaryComponent } from './company-salary/company-salary.component';
import {MatTableModule} from '@angular/material/table';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { EditCompanyInfoComponent } from './edit-company-info/edit-company-info.component';


@NgModule({
  declarations: [
    SearchCompanyComponent,
    CompanyAboutComponent,
    CompanyCommentsComponent,
    CompanyInterviewComponent,
    AddCommentComponent,
    AddInterviewComponent,
    CompanySalaryComponent,
    AddSalaryComponent,
    EditCompanyInfoComponent
  ],
  entryComponents: [AddCommentComponent,AddInterviewComponent,AddSalaryComponent,EditCompanyInfoComponent ],
  imports: [
    CommonModule,
    SharedModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatTableModule
  ],
  exports: [
    CompanyCommentsComponent,
  ]
})
export class CompaniesModule { }

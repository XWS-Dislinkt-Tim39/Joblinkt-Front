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
import { CompanySidebarComponent } from './company-sidebar/company-sidebar.component';
import { CompanyJobsComponent } from './company-jobs/company-jobs.component';
import { JobViewComponent } from './job-view/job-view.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddJobOfferComponent } from './add-job-offer/add-job-offer.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


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
    EditCompanyInfoComponent,
    CompanySidebarComponent,
    CompanyJobsComponent,
    JobViewComponent,
    AddJobOfferComponent
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
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatGridListModule,
    MatDatepickerModule,
  ],
  exports: [
    CompanyCommentsComponent,
  ]
})
export class CompaniesModule { }

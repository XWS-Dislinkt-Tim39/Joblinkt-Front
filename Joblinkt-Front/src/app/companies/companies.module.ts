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


@NgModule({
  declarations: [
    SearchCompanyComponent,
    CompanyAboutComponent,
    CompanyCommentsComponent,
    CompanyInterviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
  ]
})
export class CompaniesModule { }

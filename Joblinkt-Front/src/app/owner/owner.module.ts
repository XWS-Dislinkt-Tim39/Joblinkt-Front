import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCompaniesComponent } from './my-companies/my-companies.component';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddCompanyComponent } from './add-company/add-company.component';



@NgModule({
  declarations: [
    MyCompaniesComponent,
    AddCompanyComponent
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
    MatDialogModule,
    MatTableModule,
    MatGridListModule,
  ]
})
export class OwnerModule { }

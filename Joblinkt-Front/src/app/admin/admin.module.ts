import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRequestsComponent } from './company-requests/company-requests.component';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    CompanyRequestsComponent
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
    MatMenuModule
  ]
})
export class AdminModule { }

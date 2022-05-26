import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCompanyComponent } from './search-company/search-company.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SearchCompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CompaniesModule { }

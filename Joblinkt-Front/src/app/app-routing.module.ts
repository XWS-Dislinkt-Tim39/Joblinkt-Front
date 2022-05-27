import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CompanyAboutComponent } from './companies/company-about/company-about.component';
import { CompanyCommentsComponent } from './companies/company-comments/company-comments.component';
import { SearchCompanyComponent } from './companies/search-company/search-company.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'search-company',
    component: SearchCompanyComponent
  },
  {
    path: 'company-about',
    component: CompanyAboutComponent
  },
  {
    path: 'company-comments',
    component: CompanyCommentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewCompany } from '../models/new-company.model';
import { UpdateCompany } from '../models/update-company.model';
import { UserSignIn } from '../models/user-sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient,) { }

  getAllRegisteredCompanies(): Observable<any> {
    return this.http.get(`${environment.api_url}get-registered-companies`, { headers: this.headers, responseType: 'json' });
}
getAllCompaniesbyOwner(ownerId:string): Observable<any> {
  return this.http.get(`${environment.api_url}get-owner-companies`, { params: {
      id: ownerId
    }, headers: this.headers, responseType: 'json' });
}


  sendCompanyRequest(company: NewCompany): Observable<any> {
    return this.http.post(`${environment.api_url}create-company`, company, { headers: this.headers, responseType: 'json' });
  }
  approveCompany(company: NewCompany): Observable<any> {
    return this.http.post(`${environment.api_url}approve-company`, company, { headers: this.headers, responseType: 'json' });
  }
  getCompanyInfo(companyId:string): Observable<any> {
    return this.http.get(`${environment.api_url}get-company`, { params: {
        id: companyId
      }, headers: this.headers, responseType: 'json' });
}
editAboutInfo(editedCompany: UpdateCompany): Observable<any> {
  return this.http.post(`${environment.api_url}update-company`, editedCompany, { headers: this.headers, responseType: 'json' });
}


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewJobOffer } from '../models/new-job-offer.model';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient,) { }



  addJobOffer(newJob: NewJobOffer): Observable<any> {
    return this.http.post(`${environment.api_url}add-job-offer`, newJob,
      { headers: this.headers, responseType: 'json' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.api_url}get-all-jobs`,
      { headers: this.headers, responseType: 'json' });
  }

  getAllByCompany(userId: string): Observable<any> {
    return this.http.get(`${environment.api_url}get-company-jobs`,
      {
        params: { userId: userId },
        headers: this.headers, responseType: 'json'
      });
  }

}

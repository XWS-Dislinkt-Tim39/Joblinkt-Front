import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewComment } from '../models/new-comment.model';
import { NewInterviewProcess } from '../models/new-interview-proccess.model';
import { NewSalary } from '../models/new-salary.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyReviewService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient,) { }

  addComment(comment: NewComment): Observable<any> {
    return this.http.post(`${environment.api_url}add-comment`, comment, { headers: this.headers, responseType: 'json' });
  }
  addInterviewProcess(interview: NewInterviewProcess): Observable<any> {
    return this.http.post(`${environment.api_url}add-interview-process`, interview, { headers: this.headers, responseType: 'json' });
  }
  addSalary(salary: NewSalary): Observable<any> {
    return this.http.post(`${environment.api_url}add-salary`, salary, { headers: this.headers, responseType: 'json' });
  }

 
}

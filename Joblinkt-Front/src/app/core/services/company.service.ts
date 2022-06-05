import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserSignIn } from '../models/user-sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient,) { }

  signIn(user: UserSignIn): Observable<any> {
    return this.http.get(`${environment.api_url}sign-in`, {
      params: {
        username: user.username,
        password: user.password
      }, headers: this.headers, responseType: 'json'
    });
  }

}

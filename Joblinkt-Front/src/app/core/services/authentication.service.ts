import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserSignIn } from '../models/user-sign-in.model';
import { User } from '../models/user.model';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private headers1 = new HttpHeaders({ 'Content-Type': 'text/plain' });

  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) { }

  signIn(user: UserSignIn): Observable<any> {
    return this.http.get(`${environment.api_url}sign-in`, {
      params: {
        username: user.username,
        password: user.password
      }, headers: this.headers, responseType: 'json'
    });
  }

  register(user: User): Observable<any> {
    return this.http.post(`${environment.api_url}register`, user, { headers: this.headers, responseType: 'json' });
  }
}

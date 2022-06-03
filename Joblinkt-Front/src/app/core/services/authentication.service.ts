import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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

}

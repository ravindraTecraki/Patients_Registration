import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }
  adminSignup(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/auth/signup',data);
  }

  patientsRegistration(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/patients/patients-registration',data);
  }
  
}

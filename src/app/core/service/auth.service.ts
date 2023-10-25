import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, pipe, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public sign(payLoad:{email:string,password:string}):Observable<any> {
    return this.http.post<any>(`${this.url}/sign`, payLoad).pipe(
      map((data)=>{
        return data;
      }),
      catchError((err)=>{
        console.log(err);
        return throwError(()=>err.error.message);
      })
    )
  }
}
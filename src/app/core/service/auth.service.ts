import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, map, pipe, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:3000";

  constructor(private http: HttpClient, private router:Router) { }

  public sign(payLoad:{email:string,password:string}):Observable<any> {
    return this.http.post<{token:string}>(`${this.url}/sign`, payLoad).pipe(
      map((data)=>{
        localStorage.removeItem('acess_token');//limpo local storage
        localStorage.setItem('acess_token', JSON.stringify(data.token)); //salvo meu token no local storage
        return this.router.navigate(['/admin']); //navego para pasta adm
      }),
      catchError((e)=>{
        console.log(e);
        if(e.error.message) {
          return throwError(()=>e.error.message)
        }else{
         return throwError(()=>"No momento não conseguimos validar o login");  
        }})
    )
  }

  public logout(){
    localStorage.removeItem('acess_token');
    return this.router.navigate(['']);
  }

  public isAuthenticated(): boolean{
    const token = localStorage.getItem('acess_token');
    if(!token) return false;
    const jwtHelper = new JwtHelperService;
    //verifica se o token espIROU
    return !jwtHelper.isTokenExpired(token);
  }
}
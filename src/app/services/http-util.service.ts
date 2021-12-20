import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private http: HttpClient) { }
  urlBase: string = "https://localhost:44356/api/"
  private setHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }


  post<T>(resource: string, body?: any) {
    return this.http.post(this.urlBase + resource, body);
  }

}

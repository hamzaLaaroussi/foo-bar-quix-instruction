import { Result } from './model/result';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getConvertedNumberResult(numberToConvert: Number) : Observable<Result> {
    return this.http.get<Result>(this.apiServiceUrl+"/foo-bar-quix/"+numberToConvert);
  }
}

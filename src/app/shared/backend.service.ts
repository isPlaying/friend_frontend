import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}
  getHttpParams(params): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      httpParams = httpParams.set(key, params[key]);
    });
    return httpParams;
  }
}

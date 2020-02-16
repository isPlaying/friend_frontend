import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackendService } from 'src/app/shared/backend.service';

@Injectable({
  providedIn: 'root',
})
export class FriendBackendService {
  constructor(private httpClient: HttpClient, private bs: BackendService) {}

  getFriendList(params: object): Observable<any> {
    return this.httpClient.get('api/friend', {
      params: this.bs.getHttpParams(params),
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackendService } from 'src/app/shared/backend.service';
import { FriendDetail } from '../models/friend.model';

@Injectable({
  providedIn: 'root',
})
export class FriendBackendService {
  constructor(private httpClient: HttpClient, private bs: BackendService) {}

  getFriendList(): Observable<any> {
    return this.httpClient.get('api/friend');
  }
  getFriend(params: { name: string }): Observable<any> {
    return this.httpClient.get('api/friend', {
      params: this.bs.getHttpParams(params),
    });
  }
  addFriend(params: FriendDetail): Observable<any> {
    return this.httpClient.post('api/friend', params);
  }

  editFriend(id: string, params: FriendDetail): Observable<any> {
    return this.httpClient.put(`api/friend/${id}`, params);
  }

  deleteFriend(id: string): Observable<any> {
    return this.httpClient.delete(`api/friend/${id}`);
  }
}

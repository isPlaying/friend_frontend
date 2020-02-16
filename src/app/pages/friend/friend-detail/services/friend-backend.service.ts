import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackendService } from 'src/app/shared/backend.service';
import { IFriendDetail } from '../models/friend.model';

@Injectable({
  providedIn: 'root',
})
export class FriendBackendService {
  constructor(private httpClient: HttpClient, private bs: BackendService) {}

  getFriendList(params: { name: string }): Observable<any> {
    return this.httpClient.get('api/friend', {
      params: this.bs.getHttpParams(params),
    });
  }
  addFriend(params: IFriendDetail): Observable<any> {
    return this.httpClient.post('api/friend', params);
  }

  editFriend(id: string, params: IFriendDetail): Observable<any> {
    return this.httpClient.put(`api/friend/${id}`, params);
  }

  deleteFriend(id: string): Observable<any> {
    return this.httpClient.delete(`api/friend/${id}`);
  }
}

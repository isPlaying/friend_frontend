import { Injectable } from '@angular/core';
import { IFriendList } from './friend.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackendService } from 'src/app/shared/backend.service';
@Injectable({
  providedIn: 'root',
})
export class FriendService {
  dataSet: Array<IFriendList> = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      hobby: '123',
      gender: 'male',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      hobby: '321',
      gender: 'male',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      hobby: '123',
      gender: 'female',
    },
  ];
  constructor(private httpClient: HttpClient, private bs: BackendService) {}

  getFriendList(params: object): Observable<any> {
    return this.httpClient.get('api/friend', {
      params: this.bs.getHttpParams(params),
    });
  }

  searchFriend(searchParams: string) {
    const params = {
      name: searchParams,
    };
    this.getFriendList(params).subscribe(
      res => {},
      err => {
        console.error(err);
      }
    );
  }
}

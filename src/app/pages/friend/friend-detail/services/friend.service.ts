import { Injectable } from '@angular/core';
import { IFriendList } from '../models/friend.model';
import { FriendBackendService } from './friend-backend.service';
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
  constructor(private friendBackendService: FriendBackendService) {}

  searchFriend(searchParams: string) {
    const params = {
      name: searchParams,
    };
    this.friendBackendService.getFriendList(params).subscribe(
      res => {},
      err => {
        console.error(err);
      }
    );
  }
}

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
      remark: '----',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      hobby: '321',
      gender: 'male',
      remark: '----',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      hobby: '123',
      gender: 'female',
      remark: '----',
    },
  ];
  genderList = [
    {
      label: '男',
      value: 'male',
    },
    {
      label: '女',
      value: 'female',
    },
  ];

  gender = 'male';
  age: number;
  name = '';
  hobby = '';
  remark = '';
  visible = false;

  constructor(private friendBackendService: FriendBackendService) {}

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  /**
   * 查询好友
   *
   * @param {string} searchParams
   * @memberof FriendService
   */
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

  /**
   * 新增好友
   *
   * @memberof FriendService
   */
  addFriendSubmit() {
    const params = {
      name: this.name,
      age: this.age,
      gender: this.gender,
      hobby: this.hobby,
      remark: this.remark,
    };
    this.friendBackendService.addFriend(params).subscribe(
      res => {
        console.log(res);
        this.visible = false;
      },
      err => {
        console.error(err);
      }
    );
  }
}

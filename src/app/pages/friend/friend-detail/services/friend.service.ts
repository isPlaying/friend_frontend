import { Injectable } from '@angular/core';
import { IFriendDetail } from '../models/friend.model';
import { FriendBackendService } from './friend-backend.service';
import { NzModalService } from 'ng-zorro-antd';
@Injectable({
  providedIn: 'root',
})
export class FriendService {
  dataSet: Array<IFriendDetail> = [];
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
  friendInfo: IFriendDetail = {
    id: null,
    gender: 'male',
    age: null,
    name: '',
    hobby: '',
    remark: '',
  };

  title: string;
  visible = false;
  submitType: string;

  constructor(
    private friendBackendService: FriendBackendService,
    private modalService: NzModalService
  ) {}

  open(type: string, data?: IFriendDetail): void {
    this.title = type === 'edit' ? '编辑好友' : '添加好友';
    this.submitType = type === 'edit' ? 'edit' : 'add';
    if (type === 'edit') {
      const { id, name, age, gender, hobby, remark } = data;
      this.friendInfo = {
        ...this.friendInfo,
        id,
        gender,
        age,
        name,
        hobby,
        remark,
      };
    } else {
      this.friendInfo = {
        id: null,
        gender: 'male',
        age: null,
        name: '',
        hobby: '',
        remark: '',
      };
    }
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
   * 新增好友、编辑好友提交
   *
   * @param {string} type
   * @memberof FriendService
   */
  submit(type: string) {
    const { name, age, gender, hobby, remark } = this.friendInfo;
    const params: IFriendDetail = {
      name,
      age,
      gender,
      hobby,
      remark,
    };
    type === 'add'
      ? this.addFriend(params)
      : this.editFriend(params, this.friendInfo.id);
  }

  addFriend(params) {
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

  editFriend(params, id) {
    this.friendBackendService.editFriend(id, params).subscribe(
      res => {
        console.log(res);
        this.visible = false;
      },
      err => {
        console.error(err);
      }
    );
  }

  deleteFriend(data: IFriendDetail): void {
    this.modalService.confirm({
      nzTitle: `你是否要删除${data.name}?`,
      nzContent: '',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.friendBackendService.deleteFriend(data.id).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.error(err);
          }
        );
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}

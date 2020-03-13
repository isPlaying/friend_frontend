import { Injectable } from '@angular/core';
import { FriendDetail, IGender } from '../models/friend.model';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { FriendBackendService } from './friend-backend.service';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  dataSet: Array<FriendDetail> = [];
  friendInfo: FriendDetail = new FriendDetail();
  title: string;
  submitType: string;
  visible = false;
  genderRadioList: Array<IGender> = [
    {
      label: '男',
      value: 'male',
    },
    {
      label: '女',
      value: 'female',
    },
  ];
  constructor(
    private friendBackendService: FriendBackendService,
    private modalService: NzModalService,
    private message: NzMessageService
  ) {
    this.initFriendInfo();
  }

  /**
   * 初始化好友信息
   *
   * @memberof FriendService
   */
  initFriendInfo() {
    for (const key in this.friendInfo) {
      if (key) {
        this.friendInfo[key] = null;
      }
    }
  }

  open(type: string, data?: FriendDetail): void {
    this.title = type === 'edit' ? '编辑好友' : '添加好友';
    this.submitType = type === 'edit' ? 'edit' : 'add';
    if (type === 'edit') {
      const { id, name, age, gender, hobby, remark } = data;
      this.friendInfo.id = id;
      this.friendInfo.name = name;
      this.friendInfo.age = age;
      this.friendInfo.gender = gender;
      this.friendInfo.hobby = hobby;
      this.friendInfo.remark = remark;
    } else {
      this.initFriendInfo();
    }
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  /**
   * 获取好友列表
   *
   * @memberof FriendService
   */
  getFriendList() {
    this.friendBackendService.getFriendList().subscribe(
      res => {
        this.dataSet = res.results;
      },
      err => console.error(err)
    );
  }

  /**
   * 查询好友
   *
   * @param {string} searchParams
   * @memberof FriendService
   */
  searchFriend(searchParams: string) {
    if (!searchParams) {
      this.getFriendList();
      return;
    }
    const params = {
      name: searchParams,
    };
    this.friendBackendService.getFriend(params).subscribe(
      res => {
        this.dataSet = res.results;
      },
      err => {
        console.error(err);
      }
    );
  }

  submit(type: string): void {
    const params: FriendDetail = this.friendInfo;
    if (!params.name || !params.name.trim().length) {
      this.message.error('必填项不能为空');
      return;
    }
    if (!params.age) {
      this.message.error('必填项不能为空');
      return;
    }
    if (!params.hobby || !params.hobby.trim().length) {
      this.message.error('必填项不能为空');
      return;
    }
    if (!params.remark || !params.remark.trim().length) {
      this.message.error('必填项不能为空');
      return;
    }
    if (!params.gender) {
      this.message.error('必填项不能为空');
      return;
    }
    type === 'add' ? this.addFriend(params) : this.editFriend(params);
  }

  /**
   * 新增好友
   *
   * @param {FriendDetail} params
   * @memberof FriendService
   */
  addFriend(params: FriendDetail): void {
    this.friendBackendService.addFriend(params).subscribe(
      () => {
        this.getFriendList();
        this.message.success('添加成功');
        this.visible = false;
      },
      err => {
        console.error(err);
      }
    );
  }

  /**
   * 编辑好友
   *
   * @param {FriendDetail} params
   * @memberof FriendService
   */
  editFriend(params: FriendDetail): void {
    this.friendBackendService.editFriend(params.id, params).subscribe(
      res => {
        this.getFriendList();
        this.message.success('修改成功');
        this.visible = false;
      },
      err => {
        console.error(err);
      }
    );
  }

  /**
   * 删除好友
   *
   * @param {FriendDetail} data
   * @memberof FriendService
   */
  deleteFriend(data: FriendDetail): void {
    this.modalService.confirm({
      nzTitle: `你是否要删除${data.name}?`,
      nzContent: '',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.friendBackendService.deleteFriend(data.id).subscribe(
          res => {
            this.getFriendList();
            this.message.success('删除成功');
          },
          err => {
            console.error(err);
          }
        );
      },
      nzCancelText: '取消',
    });
  }
}

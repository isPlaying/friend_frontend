export class FriendDetail {
  id?: number; // id
  name: string; // 姓名
  age: number; // 年龄
  hobby: string; // 爱好
  gender: string; // 性别
  remark: string; // 备注
}

export interface IResponseFriend {
  results: Array<FriendDetail>;
}
export interface IGender {
  label: string;
  value: string;
}

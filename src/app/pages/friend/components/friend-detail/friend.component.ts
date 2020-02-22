import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend.service';
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.less'],
})
export class FriendComponent implements OnInit {
  constructor(private friendService: FriendService) {}

  ngOnInit() {
    this.friendService.getFriendList();
  }
}

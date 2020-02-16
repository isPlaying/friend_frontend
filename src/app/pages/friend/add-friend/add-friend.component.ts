import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend-detail/services/friend.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.less'],
})
export class AddFriendComponent implements OnInit {
  constructor(private friendService: FriendService) {}

  ngOnInit() {}
}

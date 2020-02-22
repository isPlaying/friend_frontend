import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-friend-drawer',
  templateUrl: './friend-drawer.component.html',
  styleUrls: ['./friend-drawer.component.less'],
})
export class FriendDrawerComponent implements OnInit {
  constructor(private friendService: FriendService) {}

  ngOnInit() {}
}

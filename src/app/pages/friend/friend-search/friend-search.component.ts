import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.less'],
})
export class FriendSearchComponent implements OnInit {
  @Output() searchParams = new EventEmitter<string>();
  name = '';
  constructor() {}

  ngOnInit() {}
  searchFriend(): void {
    this.searchParams.emit(this.name);
    this.name = '';
  }
}

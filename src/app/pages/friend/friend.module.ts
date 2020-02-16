import { NgModule } from '@angular/core';
import { FriendComponent } from './friend-detail/friend.component';
import { FriendRoutingModule } from './friend-routing.module';
import { FriendSearchComponent } from './friend-search/friend-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddFriendComponent } from './add-friend/add-friend.component';

@NgModule({
  imports: [FriendRoutingModule, SharedModule],
  declarations: [FriendComponent, FriendSearchComponent, AddFriendComponent],
  exports: [FriendComponent],
})
export class FriendModule {}

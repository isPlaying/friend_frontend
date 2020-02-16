import { NgModule } from '@angular/core';
import { FriendComponent } from './friend.component';
import { FriendRoutingModule } from './friend-routing.module';
import { FriendSearchComponent } from './friend-search/friend-search.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [FriendRoutingModule, SharedModule],
  declarations: [FriendComponent, FriendSearchComponent],
  exports: [FriendComponent],
})
export class FriendModule {}

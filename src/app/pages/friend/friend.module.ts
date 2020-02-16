import { NgModule } from '@angular/core';
import { FriendComponent } from './friend.component';
import { FriendRoutingModule } from './friend-routing.module';

@NgModule({
  imports: [FriendRoutingModule],
  declarations: [FriendComponent],
  exports: [FriendComponent],
})
export class FriendModule {}

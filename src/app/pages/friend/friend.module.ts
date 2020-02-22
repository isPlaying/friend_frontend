import { NgModule } from '@angular/core';
import { FriendComponent } from './components/friend-detail/friend.component';
import { FriendRoutingModule } from './friend-routing.module';
import { FriendSearchComponent } from './components/friend-search/friend-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FriendDrawerComponent } from './components/friend-drawer/friend-drawer.component';

@NgModule({
  imports: [FriendRoutingModule, SharedModule],
  declarations: [FriendComponent, FriendSearchComponent, FriendDrawerComponent],
  exports: [FriendComponent],
})
export class FriendModule {}

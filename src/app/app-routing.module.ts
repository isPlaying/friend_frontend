import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/friend',
  },
  {
    path: 'friend',
    loadChildren: () =>
      import('./pages/friend/friend.module').then(m => m.FriendModule),
  },
  { path: '**', redirectTo: '/friend' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

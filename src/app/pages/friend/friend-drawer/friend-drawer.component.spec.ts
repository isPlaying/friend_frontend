import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendDrawerComponent } from './friend-drawer.component';

describe('AddFriendComponent', () => {
  let component: FriendDrawerComponent;
  let fixture: ComponentFixture<FriendDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

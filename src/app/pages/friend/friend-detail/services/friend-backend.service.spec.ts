import { TestBed } from '@angular/core/testing';

import { FriendBackendService } from './friend-backend.service';

describe('FriendBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendBackendService = TestBed.get(FriendBackendService);
    expect(service).toBeTruthy();
  });
});

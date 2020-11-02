import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve stored item', () => {
    let item = {abc: "bbb"};
    let key = "test"
    service.setItem(key, item);
    let result = service.getItem(key);

    expect(result).toEqual(item);
  });

  it('should be able to remove item', () => {
    let item = {abc: "bbb"};
    let key = "test"
    service.setItem(key, item);
    service.deleteItem(key);
    let result = service.getItem(key);

    expect(result).toBeNull();
  });
});

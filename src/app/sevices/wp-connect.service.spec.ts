import { TestBed, inject } from '@angular/core/testing';

import { WpConnectService } from './wp-connect.service';

describe('WpConnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpConnectService]
    });
  });

  it('should ...', inject([WpConnectService], (service: WpConnectService) => {
    expect(service).toBeTruthy();
  }));
});

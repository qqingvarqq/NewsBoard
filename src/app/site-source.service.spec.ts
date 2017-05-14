import { TestBed, inject } from '@angular/core/testing';

import { SiteSourceService } from './site-source.service';

describe('SiteSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteSourceService]
    });
  });

  it('should ...', inject([SiteSourceService], (service: SiteSourceService) => {
    expect(service).toBeTruthy();
  }));
});

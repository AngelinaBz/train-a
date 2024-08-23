import { TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
import { SigninService } from './signin.service';

describe('SigninService', () => {
  let service: SigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers,
    });
    service = TestBed.inject(SigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

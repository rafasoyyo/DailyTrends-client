import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { FeedsService } from './feeds.service';

describe('FeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeedsService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([FeedsService], (service: FeedsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an array', inject([FeedsService], (service: FeedsService) => {
    service.today().subscribe(
      (result) => { expect(result).toEqual(Array) }
    ,
      (error) => { expect(error).toBeFalsy() }
    )
  }));

});

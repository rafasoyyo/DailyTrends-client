import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsDailyComponent } from './feeds-daily.component';

describe('FeedsDailyComponent', () => {
  let component: FeedsDailyComponent;
  let fixture: ComponentFixture<FeedsDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

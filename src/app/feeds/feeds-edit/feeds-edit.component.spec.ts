import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsEditComponent } from './feeds-edit.component';

describe('FeedsEditComponent', () => {
  let component: FeedsEditComponent;
  let fixture: ComponentFixture<FeedsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

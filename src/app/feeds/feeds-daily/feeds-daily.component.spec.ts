import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DataGridModule } from 'primeng/datagrid';

import { ConfirmationService } from 'primeng/api';

import { FeedsDailyComponent } from './feeds-daily.component';
import { ArrayFilterPipe } from '../../pipes/array-filter.pipe';
import { FeedsService } from '../feeds.service';
import { Feed } from '../feed';

describe('FeedsDailyComponent', () => {
  let component: FeedsDailyComponent;
  let fixture: ComponentFixture<FeedsDailyComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedsDailyComponent,
        ArrayFilterPipe
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        CardModule,
        DialogModule,
        ConfirmDialogModule,
        ProgressSpinnerModule,
        GrowlModule,
        DataGridModule
      ],
      providers: [
        ConfirmationService,
        FeedsService
      ],
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

  it('dailyFeeds should be an Array of Feeds', () => {
    expect(component.dailyFeeds).toEqual(Array<Feed>());
  });

});

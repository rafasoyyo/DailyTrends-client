
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataGridModule } from 'primeng/datagrid';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmationService } from 'primeng/api';

import { FeedsCreateComponent } from './feeds-create.component';
import { FeedsService } from '../feeds.service';
import { Feed } from '../feed';

describe('FeedsCreateComponent', () => {
  let component: FeedsCreateComponent;
  let fixture: ComponentFixture<FeedsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsCreateComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ButtonModule,
        CardModule,
        DataGridModule,
        DialogModule,
        ConfirmDialogModule,
        GrowlModule,
        InputTextModule,
        ProgressSpinnerModule
      ],
      providers: [
        ConfirmationService,
        FeedsService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('saveFeed should Be Truthy', () => {
    expect(component.saveFeed).toBeTruthy();
  });

});

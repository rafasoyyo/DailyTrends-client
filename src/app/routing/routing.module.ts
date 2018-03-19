import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataGridModule } from 'primeng/datagrid';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppComponent } from '../app.component';

import { FeedsDailyComponent } from '../feeds/feeds-daily/feeds-daily.component';
import { FeedsEditComponent } from '../feeds/feeds-edit/feeds-edit.component';

import { FeedsService } from '../feeds/feeds.service';
import { ArrayFilterPipe } from '../pipes/array-filter.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'feeds', pathMatch: 'full' },
  { path: 'feeds', component: FeedsDailyComponent },
  { path: 'feeds/edit/:feedsId', component: FeedsEditComponent }
];

@NgModule({
  declarations: [
    FeedsDailyComponent,
    FeedsEditComponent,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    DataGridModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule,
    InputTextModule,
    ProgressSpinnerModule,
    RouterModule.forRoot( routes )
  ],
  providers: [
    ConfirmationService,
    FeedsService
  ],
})

export class RoutingModule { }

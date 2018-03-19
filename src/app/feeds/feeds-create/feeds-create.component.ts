
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { Observable } from 'rxjs/observable';

import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { FeedsService } from '../feeds.service';
import { Feed } from '../feed';

@Component({
  // selector: 'app-feeds-create',
  templateUrl: './feeds-create.component.html',
  styleUrls: ['./feeds-create.component.css']
})
export class FeedsCreateComponent {

  constructor(private router: Router, private feedsService: FeedsService) {}

  private msgs: Message[] = [];
  private feedEditor: any = {
    display: true,
    workingFeed: <Feed> {}
  };

  saveFeed() {
    this.feedsService.create(this.feedEditor.workingFeed)
      .subscribe(
        (response) =>  {
          this.router.navigate(['/feeds']);
        },
        (error) => {
          console.error('Error getting feeds -> ', error);
          this.msgs = [{severity: 'error', summary: 'Ups!', detail: 'Some error has happend!'}];
        }
      );
  }

  goBack() {
    this.router.navigate(['/feeds']);
  }

}

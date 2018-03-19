
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  templateUrl: './feeds-edit.component.html',
  styleUrls: ['./feeds-edit.component.css']
})
export class FeedsEditComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private feedsService: FeedsService) {}

  private msgs: Message[] = [];
  private feedEditor: any = {
    display: false,
    workingFeed: <Feed> {}
  };
  private params: any = this.activatedRoute.snapshot.params;

  getFeed(feedId: string) {
    this.feedsService.read(feedId)
      .subscribe(
        (response) =>  {
          this.feedEditor.workingFeed = response;
          this.feedEditor.display = true;
        },
        (error) => {
          console.error('Error getting feeds -> ', error);
          this.msgs = [{severity: 'error', summary: 'Ups!', detail: 'Some error has happend!'}];
        }
      );

  }

  saveFeed() {
    this.feedsService.update(this.feedEditor.workingFeed)
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

  ngOnInit() {
    this.getFeed(this.params.feedsId);
  }
}

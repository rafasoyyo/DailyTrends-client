
import { Component, OnInit } from '@angular/core';
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
  // selector: 'app-feeds-daily',
  templateUrl: './feeds-daily.component.html',
  styleUrls: ['./feeds-daily.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-25px)'
        }),
        animate('1500ms 0ms ease-in-out')
      ])
    ])
  ]
})
export class FeedsDailyComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService, private feedsService: FeedsService) {}

  private title = 'Daily Feeds App';
  private dailyFeeds: Array<Feed> = [];
  private msgs: Message[] = [];
  private feedEditor: any = {
    display: false,
    search: <String> null,
    workingFeed: <Feed> null,
    open: function (feed: Feed) {
      this.workingFeed = feed ? Object.assign({}, feed) : {};
      this.display = true;
    }
  };

  addFeed(feed: Feed) {
    this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Feed added!'}];
    return this.dailyFeeds.splice(0, 0, feed);
  }

  editFeed(feed: Feed) {
    this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Feed edited!'}];
    const index = this.dailyFeeds.findIndex( f => f._id === feed._id );
    if (index !== -1) {
      return this.dailyFeeds.splice(index, 1, feed);
    }
  }

  removeFeed(feed: Feed) {
    this.msgs = [{severity: 'success', summary: 'Confirmed', detail: 'Feed deleted!'}];
    const index = this.dailyFeeds.findIndex( f => f._id === feed._id );
    if (index !== -1) {
      this.dailyFeeds.splice(index, 1);
    }
    if (!this.dailyFeeds.length) {
      this.getTodayFeeds();
    }
    return true;
  }

  getTodayFeeds() {
    return this.feedsService.today()
      .subscribe(
        (response) =>  {
          return this.dailyFeeds = response.sort((a, b) => a.createdAt - b.createdAt );
        },
        (error) => {
          console.error('Error getting feeds -> ', error);
          this.msgs = [{severity: 'error', summary: 'Ups!', detail: 'Some error has happend!'}];
        }
      );
  }

  saveFeed() {
    let promise, callback;
    if (this.feedEditor.workingFeed._id) {
      promise = this.feedsService.update(this.feedEditor.workingFeed);
      callback = 'editFeed';
    } else {
      promise = this.feedsService.create(this.feedEditor.workingFeed);
      callback = 'addFeed';
    }
    return promise.subscribe(
        (response) =>  {
          this[callback](response);
          this.feedEditor.display = false;
        },
        (error) => {
          console.error('Error getting feeds -> ', error);
          this.msgs = [{severity: 'error', summary: 'Ups!', detail: 'Some error has happend!'}];
        }
      );
  }

  deleteFeed(feed: Feed) {
    this.confirmationService.confirm({
      header: 'Are you sure that you want to delete this feed?',
      message: feed.title,
      accept: () => {
        return this.feedsService.delete(feed)
          .subscribe(
            (response) =>  {
              this.removeFeed(feed);
            },
            (error) => {
              console.error('Error getting feeds -> ', error);
              this.msgs = [{severity: 'error', summary: 'Ups!', detail: 'Some error has happend!'}];
            }
          );
      }
    });
  }

  ngOnInit() {
    this.getTodayFeeds();
  }

}

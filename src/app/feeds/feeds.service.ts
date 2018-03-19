import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Feed } from './feed';

@Injectable()
export class FeedsService {

  constructor(private http: HttpClient) {}

  private feedUrl = 'http://localhost:3000/api/feeds/';

  create(feed: Feed) {
    return this.http.post(`${this.feedUrl}`, feed);
  }

  read(feedId?: string) {
    return this.http.get(`${this.feedUrl}${feedId}`);
  }

  list() {
    return this.http.get(`${this.feedUrl}`);
  }

  update(feed: Feed) {
    return this.http.put(`${this.feedUrl}${feed._id}`, feed);
  }

  delete(feed: Feed) {
    return this.http.delete(`${this.feedUrl}${feed._id}`);
  }

  today(): Observable<any> {
    return this.http.get(`${this.feedUrl}today`);
  }

}

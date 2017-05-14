import { Observable } from 'rxjs/Rx';
import { Component, DoCheck } from '@angular/core';
import { NewsFeedService } from "../news-feed.service";
import { NewsCardComponent } from "../news-card/news-card.component";
import { NewsCard } from "../news-card";
import { FilterDataService } from "../filter-data.service";
import { Filter } from "../filter";
/**
 * NewsFeedComponent:
 * defines news fed
 * with specific filter shared by FilterDataService and FikterNewsComponent
 */
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent {
  //all news cards metadata
  private newsList = new Array();
  //newscards items avaible for view
  listView = new Array<NewsCard>();
  //count newwscard per update scroll
  private count = 10;

  private filter: Filter;
  /**
   * constructor fetch all metadata for view
   */
  constructor(private newsFeedService: NewsFeedService,
    private filterDataService: FilterDataService) {
    this.filter = this.filterDataService.getFilter();
    this.newsFeedService.getAllNews(this.filter).subscribe((obsData) => {
      obsData.subscribe((data) => {
        data.forEach(element => {
          this.newsList.push(...element);
        });
        this.newsList.sort((first, second) => {
          if (first._date == second._date) {
            return 0;
          }
          else {
            if (first._date < second._date) {
              return 1;
            }
            return -1;
          }
        });
      },
        null,
        () => {
          this.onScrollDown();
        });
    });
  }
  /**
   * onScrollDown:
   * add news card to view when scroll down
   */
  onScrollDown() {
    if (this.newsList.length) {
      for (let i = 0; i < 10; i++) {
        this.listView.push(this.newsList.shift());
      }
    }
  }
}

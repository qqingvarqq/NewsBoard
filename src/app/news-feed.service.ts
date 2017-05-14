import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsCard } from "./news-card";
import { Site } from "./site";
import { SiteDataService } from "./site-data.service";
import { SiteSourceService } from "./site-source.service";
import { Filter } from "./filter";
/**
 * NewsFeedService:
 * load metadata from all sites
 */
@Injectable()
export class NewsFeedService {
  private newsList = new Array<NewsCard>();
  private siteList = new Array<Site>();
  private count = 0;
  constructor(private siteDataService: SiteDataService,
    private siteSourceService: SiteSourceService) {
  }
  /**
   * getAllNews:
   * return All news with specific Filter
   */
  public getAllNews(filter: Filter): Observable<Observable<NewsCard[][]>> {
    return this.siteSourceService.getSites().map((sites) => {
      this.siteList = sites;
      return Observable.of(this.siteList);
    }).map((elemnt) => {
      var site: Site[];
      elemnt.subscribe((value) => site = value);
      var observableNews = new Array<Observable<NewsCard[]>>();
      site.forEach(element => {
        if (this.checkToLoad(filter, element)) {
          observableNews.push(this.siteDataService.getNews(element, filter.filter));
        }
      });
      return Observable.forkJoin(...observableNews);
    });
  }
  /**
   * checkToLoad:
   * check website for filter criteria
   */
  private checkToLoad(filter: Filter, site: Site) {
    if (new Set(site.sortBysAvailable).has(filter.filter) &&
      filter.categories.has(site.category)) {
      return true;
    }
    return false;
  }
}
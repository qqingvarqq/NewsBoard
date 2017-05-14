import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Site } from "./site";
import { NewsCard } from "./news-card";
import { API_KEY } from "./apiKey";
import { Observable } from "RxJS/Rx";
import 'rxjs/add/operator/map';
/**
 * SiteDataService:
 * load news for current website
 */
@Injectable()
export class SiteDataService {
  private url: string = "https://newsapi.org/v1/articles?";
  constructor(private http: Http) { }
  
  private makeRequestUrl(siteId: string, filterNews: string): string {
    return this.url + "source=" + siteId + "&sortBy=" + filterNews + "&apiKey=85d5c408fb004fbc89d7df39b050e9b5";
  }
  /**
   * getNews:
   * get news for current site
   */
  public getNews(site: Site, filterNews: string): Observable<Array<NewsCard>> {
    return this.http.get(this.makeRequestUrl(site.id, filterNews)).map(response => {
      var newsCards = new Array<NewsCard>();
      response.json().articles.forEach(element => {
        newsCards.push(new NewsCard(
          element.title,
          site.urlToIMg,
          element.description,
          element.urlToImage,
          element.url,
          new Date(element.publishedAt)));
      });
      return newsCards;
    });
  }
}
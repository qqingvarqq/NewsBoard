import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Site } from "./site";
import { Observable } from "RxJS/Rx";
import 'rxjs/add/operator/map';
/**
 * SiteSourceService:
 * get all site list
 */
@Injectable()
export class SiteSourceService {
  private url: string = "https://newsapi.org/v1/sources";
  constructor(private http: Http) { }
  /**
   * getSites:
   * get site list
   */
  public getSites(): Observable<Array<Site>> {
    return this.http.get(this.url).map(response => {
      var sites = new Array<Site>();
      response.json().sources.forEach(element => {
        if (element.language == 'en') {
          sites.push(
            new Site(element.id,
              element.name,
              element.description,
              element.category,
              element.url,
              element.sortBysAvailable)
          );
        }
      });
      return sites;
    });
  }
  /**
   * getSiteById:
   * get site with specific id 
   */
  public getSiteById(id: string): Observable<Site> {
    return this.getSites().map(value => {
      var result: Site;
      value.forEach(element => {
        if (element.id == id) {
          result = element;
        }
      });
      return result;
    });
  }
}
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Site } from "../site";
import { SiteSourceService } from "../site-source.service";
import { SiteDataService } from "../site-data.service";
import { NewsCardComponent } from "../news-card/news-card.component";
import { NewsCard } from "../news-card";
/**
 * SiteComponent:
 * display curent site metadata and all site news
 */
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  site: Site;
  newsFilter: string;
  newsCards: NewsCard[];
  constructor(private siteDataService: SiteDataService,
    private siteSourceService: SiteSourceService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.loadSite();
  }
  /**
   * loadSite:
   * load site metadata and all news
   */
  private loadSite() {
    this.siteSourceService.getSiteById(this.route.snapshot.params['id'])
      .subscribe((site) => {
        this.site = site;
        this.newsFilter = this.site.sortBysAvailable[0] as string;
      }, null, () => {
        this.siteDataService.getNews(this.site, this.newsFilter)
          .subscribe((news) => this.newsCards = news);
      });
  }
  /**
   * reloadNews:
   * reload news for current category
   */
  private reloadNews(filter: string) {
    this.newsFilter = filter;
    this.siteDataService.getNews(this.site, this.newsFilter).subscribe((newsCards) => this.newsCards = newsCards);
  }
}

import { forEach } from '@angular/router/src/utils/collection';
import { elementAt } from 'rxjs/operator/elementAt';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsCardComponent } from "../news-card/news-card.component";
import { NewsCard } from "../news-card";
import { NewsFeedService } from "../news-feed.service";
import { Filter } from "../filter";
/**
 * SearchComponent:
 * seach data from all news both top and latest
 * and display cards
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchData = new Array<NewsCard>();
  searchValue: string;
  constructor(private route: ActivatedRoute,
    private newsFeedService: NewsFeedService) {
  }
  ngOnInit() {
    this.route.params.subscribe(() => {
      this.searchData.length = 0;
      this.searchValue = this.route.snapshot.params['id'];
      this.generateSearchResult(this.searchValue);
    });
  }
  /**
   * generateSearchResult:
   * async load top and latest data 
   * 
   */
  private generateSearchResult(searchValue: string) {
    let filter1 = new Filter('top', Filter.getAllCategories());
    let filter2 = new Filter('latest', Filter.getAllCategories());
    //load top news async
    this.newsFeedService.getAllNews(filter1).subscribe((obsData) => {
      obsData.subscribe((data) => {
        data.forEach(element => {
          element.forEach(elementInner => {
            this.addItem(elementInner, searchValue);
          });
        });
      });
    });
    //load latest news async
    this.newsFeedService.getAllNews(filter2).subscribe((obsData) => {
      obsData.subscribe((data) => {
        data.forEach(element => {
          element.forEach(elementInner => {
            this.addItem(elementInner, searchValue);
          });
        });
      });
    });
  }
  /**
   * addUniqueItem:
   * check if item unique for top and latest news
   */
  private addUniqueItem(arr: Array<NewsCard>, item: NewsCard) {
    for (let i = 0; i < arr.length; i++) {
      if (JSON.stringify(arr[i]) === JSON.stringify(item)) {
        return;
      }
    }
    arr.push(item);
  }
  /**
   * addItem:
   */
  private addItem(element: NewsCard, searchValue: string) {
    if (element.description && element.title) {
      if (element.description.search(searchValue) != -1 ||
        element.title.search(searchValue) != -1) {
        this.addUniqueItem(this.searchData, element);
        return;
      }
    } else {
      if (element.title) {
        if (element.title.search(searchValue) != -1) {
          this.addUniqueItem(this.searchData, element);
          return;
        }
      } else {
        if (element.description) {
          if (element.description.search(searchValue) != -1) {
            this.addUniqueItem(this.searchData, element);
            return;
          }
        }
      }
    }
  }



}

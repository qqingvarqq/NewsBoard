import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from "@angular/router";
import { FilterDataService } from "../filter-data.service";
import { Filter } from "../filter";
/**
 * FilterNewsComponent:
 * filtering news data by category
 * and share Filter object to FilterDataService
 * route:filter
 */
@Component({
  selector: 'app-filter-news',
  templateUrl: './filter-news.component.html',
  styleUrls: ['./filter-news.component.css']
})
export class FilterNewsComponent implements OnInit, OnDestroy {
  @Input() model: Filter;
  constructor(private filterDataService: FilterDataService, private router: Router) { }
  ngOnInit() {
    this.model = this.filterDataService.getFilter();
  }
  ngOnDestroy() {

  }
  /**
   * addCategory:
   * Add category to filter object
   */
  private addCategory(category: string) {
    if (!this.model.categories.has(category)) {
      this.model.categories.add(category);
    }
  }
  /**
   * removeCategory:
   * Remove category from filter object
   */
  private removeCategory(category: string) {
    if (this.model.categories.has(category)) {
      this.model.categories.delete(category);
    }
  }
  /**
   * onChange:
   * Call when sidetogle togle
   * add and remove categories from filter
   */
  public onChange(event: any, category) {
    if (event.checked == true) {
      this.addCategory(category);
    } else {
      this.removeCategory(category);
    }
  }
  /**
   * reloadNews:
   * share filter to FilterDataService and
   * redirect to the NewsFeedComponent
   */
  public reloadNews(filter) {
    this.model.filter = filter;
    this.filterDataService.setFilter(this.model);
    this.router.navigateByUrl('');
  }

}

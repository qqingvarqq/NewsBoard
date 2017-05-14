import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Filter } from "./filter";

/**
 * FilterDataService:
 * Singelton dataservice for share filter Data
 * and save filter into localStorage
 */
@Injectable()
export class FilterDataService {
  constructor() {
    this.loadFromLoacalStorage();
  }
  private filter: Filter = new Filter('top', Filter.getAllCategories());
  /**
   * getFilter:
   */
  getFilter(): Filter {
    return this.filter;
  }
  /**
   * setFilter:
   */
  setFilter(filter: Filter) {
    this.filter = filter;
    this.savetoLoacalStorage();
  }
  /**
   * loadFromLoacalStorage:
   * Load filter from local Storage 
   * if filter don't exist generate new filter
   */
  private loadFromLoacalStorage() {
    if (JSON.parse(localStorage.getItem('settings')) == null) {
    }
    else {
      var rowData = JSON.parse(localStorage.getItem('settings'));
      rowData.categories = new Set(rowData.categories);
      this.filter = rowData as Filter;
    }
  }
  /**
   * savetoLoacalStorage:
   * save filter to Local Storage
   */
  private savetoLoacalStorage() {
    localStorage.setItem('settings', JSON.stringify({ 'filter': this.filter.filter, 'categories': Array.from(this.filter.categories) }));
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
/**
 * AppComponent
 * Main component with Sidenav
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }
  /**
   * navigate:
   * navigate to path
   */
  public navigate(link) {
    this.router.navigateByUrl(link);
  }
  /**
   * onEnterSearch:
   * clear seach box and navigate to SearchComponent
   */
  public onEnterSearch(search){
    console.log(search.value);
    this.router.navigate(['/search',search.value]);
    search.value="";
  } 
}

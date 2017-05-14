import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { SiteSourceService } from "./site-source.service";
import { SiteDataService } from "./site-data.service";
import 'hammerjs';
import { NewsCardComponent } from './news-card/news-card.component';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteComponent } from './site/site.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsFeedService } from "./news-feed.service";
import { InfinityListDirective } from './infinity-list.directive';
import { FilterNewsComponent } from './filter-news/filter-news.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule }     from './app-routing.module';
import { FilterDataService } from "./filter-data.service";
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    SiteListComponent,
    SiteComponent,
    NewsFeedComponent,
    InfinityListDirective,
    FilterNewsComponent,
    AboutComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    SiteSourceService,
    SiteDataService,
    NewsFeedService,
    FilterDataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

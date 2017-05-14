import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from "./news-feed/news-feed.component";
import { SiteListComponent } from "./site-list/site-list.component";
import { SiteComponent } from "./site/site.component";
import { FilterNewsComponent } from "./filter-news/filter-news.component";
import { AboutComponent } from "./about/about.component";
import { SearchComponent } from "./search/search.component";
/**
 * Routes:
 * Define route pathes
 */
const routes: Routes = [
    {
        path: '',
        component: NewsFeedComponent
    },
    {
        path: 'filter',
        component: FilterNewsComponent,
        data: { shouldDetach: true }
    },
    {
        path: 'sites',
        component: SiteListComponent
    },
    {
        path: 'sites/:id',
        component: SiteComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'search/:id',
        component: SearchComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
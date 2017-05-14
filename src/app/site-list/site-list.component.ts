import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteSourceService } from "../site-source.service";
import { Site } from "../site";
import 'rxjs';
/**
 * SiteListComponent:
 * Show avaible sites
 */
@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {
  public sites: Site[];
  constructor(private siteSourceService: SiteSourceService,
  private router:Router ) { }
  
  ngOnInit() {
    this.generateSiteData();
  }

  private generateSiteData() {
    this.siteSourceService.getSites()
      .subscribe((sites) => this.sites = sites);
  }

}



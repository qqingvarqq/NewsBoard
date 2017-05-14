import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NewsCard } from '../news-card'
/**
 * NewsCardComponent:
 * define news card component
 * with Input newsCard property
 */
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  constructor() {
  }
  @Input() newsCard:NewsCard; 
  onNavigate() {
    window.open(this.newsCard.url, "_blank");
  }

}

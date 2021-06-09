import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.less']
})
export class HotComponent implements OnInit {
  newsList: []

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(){
    this.newsService.getNews().then((res) => {
      this.newsList = res.data.items;
      console.log(this.newsList)
    })
  }

}

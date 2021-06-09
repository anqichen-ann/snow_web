import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.less']
})
export class DayComponent implements OnInit {
  dayInfoList: [];
  now =  new Date();
  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.getDayInfo()
  }

  getDayInfo(){
    this.newsService.getDayInfo().then((res) => {
      this.dayInfoList = res.data.items;
      console.log(this.dayInfoList)
    })
  }


}

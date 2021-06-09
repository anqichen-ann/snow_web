import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.less']
})
export class StockListComponent implements OnInit {
  stockList = [];
  imgUrl = '';

  constructor(public newsService: NewsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      let index = param.index;
      this.newsService.getStockList(index).then(res => {
        this.stockList = res.data.data.items;
        console.log(this.stockList)
      })
    })
    
  }

  getImgUrl(increment: number){
    return increment > 0 ? '../../../assets/ArrowUp.png' : '../../../assets/ArrowDown.png'
  }

  

}

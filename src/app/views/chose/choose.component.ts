import { Component, OnInit } from '@angular/core';
import { RangeItem } from 'src/app/obj/rangeItem';
import { NewsService} from '../../service/news.service';

@Component({
  selector: 'app-chose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.less']
})
export class ChooseComponent implements OnInit {
  area: {}
  areaList: string[]
  industries: []
  toolList: {'基本指标':[]}
  currentTab = '基本指标'
  queryList: string[]
  rangeList = []
  exchange = ""
  areacode = ""
  indcode = ""


  constructor(public newsService: NewsService) { }

  async ngOnInit() {
    this.getArea()
    this.getIndustry()
    this.getTool()
  }

  async getArea() {
    let resultOfArea = await this.newsService.getAreaList();
    this.area = resultOfArea.data.data.areas;
    this.areaList = Object.keys(this.area);
  }

  async getIndustry() {
    let resultOfIndustries = await this.newsService.getIndustries();
    this.industries = resultOfIndustries.data.data.industries;
  }

  async getTool() {
    let resultOfTool = await this.newsService.getQuery();
    this.toolList = resultOfTool.data;
    this.queryList = Object.keys(this.toolList)
    this.currentTab = this.queryList[0]
    console.log(this.toolList)
  }

  toggleTab(title) {
    this.currentTab = title
  }

 async select(item){
   let remove = false;
   this.rangeList.forEach((rangeItem, index) => {
     if (rangeItem.name == item.name) {
       this.rangeList.splice(index, 1)
       remove = true;
       return;
     }
   })
   if (!remove) {
    if(item.adj == 1){
      item.field = item.field + '.20210331'
     }
      let result = await this.newsService.getRange(item.field);
      item.min = result.data.data.min
      item.max = result.data.data.max
      item.cmin = result.data.data.min
      item.cmax = result.data.data.max
      this.rangeList.push(item)
    }
   }

   async queryStock() {
     let options = {
      category: "CN",
      exchange: this.exchange,
      areacode: this.areacode,
      indcode: this.indcode,
      order_by: "symbol",
      order: "desc",
      page: 1,
      size: 30,
      only_count: 0,
      current: "",
      pct: "",
      _: new Date().getTime
     }
     this.rangeList.forEach(item => {
       if(parseFloat(item.cmin) < parseFloat(item.cmax)){
        options[item.field] = item.min + '_' + item.max
       } else {
        options[item.field] = item.min + '_' + item.max
       }
     })
     let result = await this.newsService.getQueryStock(options);
    this.queryStock = result.data.data.list
    console.log(this.queryStock)

   }

}

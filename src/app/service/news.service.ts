import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = 'http://localhost:8080';

  constructor() { }

  async getNews(){
    let url = this.baseUrl + '/api/index/content'
    return await axios.get(url);
  }

  async getDayInfo(){
    let url = this.baseUrl + '/api/index/dayInfo'
    return await axios.get(url);
  }

  async getStockList(index){
    let url = this.baseUrl + `/api/index/hotStock?index=${index}`
    return await axios.get(url);
  }

  async getAreaList(){
    let url = this.baseUrl + '/api/choose/area'
    return await axios.get(url);
  }

  async getIndustries(){
    let url = this.baseUrl + '/api/choose/industries'
    return await axios.get(url);
  }

  async getQuery(){
    let url = this.baseUrl + '/api/choose/query'
    return await axios.get(url);
  }

  async getRange(field){
    let url = this.baseUrl + `/api/choose/range?field=${field}`
    return await axios.get(url)
  }

  async getQueryStock(options) {
    let url = this.baseUrl + '/api/choose/queryStock'
    return await axios.get(url, {params: options})
  }
}

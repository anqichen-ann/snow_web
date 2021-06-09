import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  quoteList = [];
  activeDom = 10;
  itemListPosition = {
    transform: 'translate(0px)'
  }

  constructor(public router: Router, public route: ActivatedRoute) {
    this.getData()
   }

  ngOnInit(): void {
  }

  async getData() {
    try {
      let result = await axios.get('http://localhost:8080/api/index/quote')
      this.quoteList = result.data.data.items.slice(0, 9);
    console.log(result.data)
    } catch (e) {
      console.log(e)
    }
  }

  transform(index) {
    console.log(index)
    this.itemListPosition = {
      transform: `translate(-${index*640}px)`
    }
  }

  showStockList(index) {
    this.activeDom = index; 
    this.router.navigate(['main', {outlets: {index: ['list']}}], {
      queryParams: {
        index: index
      }
    });
  }

}

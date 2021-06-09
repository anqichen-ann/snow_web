import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { ChooseComponent } from './views/chose/choose.component';
import { SearchComponent } from './views/search/search.component';
import { NewStockComponent } from './views/new-stock/new-stock.component';
import { from } from 'rxjs';
import { HotComponent } from './component/hot/hot.component';
import { DayComponent } from './component/day/day.component';
import { TimeStampPipe } from './pipe/time-stamp.pipe';
import { StockListComponent } from './component/stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ChooseComponent,
    SearchComponent,
    NewStockComponent,
    HotComponent,
    DayComponent,
    TimeStampPipe,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { ChooseComponent } from './views/chose/choose.component';
import { SearchComponent } from './views/search/search.component';
import { NewStockComponent } from './views/new-stock/new-stock.component';
import { HotComponent } from './component/hot/hot.component';
import { DayComponent } from './component/day/day.component';
import { StockListComponent } from './component/stock-list/stock-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: IndexComponent,
    children: [
      {
        path: 'hot',
        component: HotComponent,
      },
      {
        path: 'day',
        component: DayComponent,
      },
      {
        path: 'list',
        component: StockListComponent,
        outlet: 'index'
      }
    ]
  },
  {
    path: 'choose',
    component: ChooseComponent
  },
  {
    path: 'new-stock',
    component: NewStockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

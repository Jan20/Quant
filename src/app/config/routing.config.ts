import { Routes } from '@angular/router';

import { PortfolioComponent } from './../portfolio/portfolio.component';
import { MarketComponent } from './../market/market.component';
import { SettingsComponent } from './../settings/settings.component';
import { StockComponent } from './../stock/stock.component';
import { LoginComponent } from './../login/login.component';
import { StrategyComponent } from './../strategy/strategy.component';

// Routing
export const ROUTES: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'markets', component: MarketComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'stock', component: StockComponent },
  { path: 'stock/:market/:symbol', component: StockComponent },
];

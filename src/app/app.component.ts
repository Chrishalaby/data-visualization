import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { ClimateChangeComponent } from './components/climate-change/climate-change.component';
import { CovidChartsComponent } from './components/covid-charts/covid-charts.component';
import { CustomerSegmentationComponent } from './components/customer-segmentation/customer-segmentation.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { StockMarketComponent } from './components/stock-market/stock-market.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    TabViewModule,
    CovidChartsComponent,
    StockMarketComponent,
    ClimateChangeComponent,
    SentimentAnalysisComponent,
    CustomerSegmentationComponent,
  ],
})
export class AppComponent {
  title = 'data-visualization';
}

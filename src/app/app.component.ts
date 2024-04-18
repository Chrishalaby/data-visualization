import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { CovidChartsComponent } from './components/covid-charts.component';
import { GitHubReposComponent } from './components/github-repos.component';
import { ProgrammingLanguageStatsComponent } from './components/programming-lang-stats.component';
import { RandomUserComponent } from './components/random-user.component';
import { WeatherForecastComponent } from './components/weather-forecast.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    TabViewModule,
    WeatherForecastComponent,
    GitHubReposComponent,
    RandomUserComponent,
    CovidChartsComponent,
    ProgrammingLanguageStatsComponent,
  ],
})
export class AppComponent {
  title = 'data-visualization';
}

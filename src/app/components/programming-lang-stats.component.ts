import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DataService } from '../DataService.service';

@Component({
  selector: 'app-programming-language-stats',
  standalone: true,
  imports: [CommonModule, ChartModule],
  template: ` <h3>under work</h3> `,
  styles: [
    `
      .chart-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgrammingLanguageStatsComponent {
  pieChartData: any;
  barChartData: any;
  // <!-- <div *ngIf="pieChartData">
  //   <h4>GitHub Programming Language Statistics</h4>
  //   <p-chart type="pie" [data]="pieChartData"></p-chart>
  // </div>
  // <div *ngIf="barChartData">
  //   <p-chart type="bar" [data]="barChartData"></p-chart>
  // </div> -->
  constructor(private dataService: DataService) {}

  // ngOnInit() {
  //   this.dataService.getGitHubLangStats().subscribe((data: any) => {
  //     const languageData = data.langStats.languages;

  //     this.pieChartData = {
  //       labels: languageData.map((lang: any) => lang.language),
  //       datasets: [
  //         {
  //           data: languageData.map((lang: any) => lang.count),
  //           backgroundColor: this.generateColors(languageData.length),
  //         },
  //       ],
  //     };

  //     this.barChartData = {
  //       labels: languageData.map((lang: any) => lang.language),
  //       datasets: [
  //         {
  //           label: 'Repositories',
  //           backgroundColor: this.generateColors(languageData.length),
  //           data: languageData.map((lang: any) => lang.count),
  //         },
  //       ],
  //     };
  //   });
  // }

  // generateColors(count: number): string[] {
  //   const colors: string[] = [];
  //   for (let i = 0; i < count; i++) {
  //     const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  //     colors.push(color);
  //   }
  //   return colors;
  // }
}

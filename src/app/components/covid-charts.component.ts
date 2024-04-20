import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown'; // Import DropdownModule
import { DataService } from '../DataService.service';

@Component({
  selector: 'app-covid-charts',
  standalone: true,
  imports: [CommonModule, ChartModule, DropdownModule, FormsModule],
  template: `
    <h2>COVID-19 Cases</h2>
    <p-dropdown
      [options]="chartOptions"
      [(ngModel)]="selectedChartType"
      placeholder="Select a chart type"
      (onChange)="updateChart()"
    ></p-dropdown>
    <p-chart
      [type]="selectedChartType"
      [data]="chartData"
      [options]="chartOptions"
    ></p-chart>
    <p>
      Source:
      <a href="https://covidtracking.com" target="_blank">Covid Tracking</a>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidChartsComponent implements OnInit {
  chartData: any;
  selectedChartType: string = 'line';
  chartOptions: any[] = [
    { label: 'Line', value: 'line' },
    { label: 'Bar', value: 'bar' },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCovidData().subscribe(
      (data) => {
        this.processData(data);
      },
      (error) => {
        console.error('Error fetching COVID-19 data:', error);
      }
    );
  }

  processData(data: any[]): void {
    this.chartData = {
      labels: data.map((entry) => entry.date),
      datasets: [
        {
          label: 'COVID-19 Cases',
          data: data.map((entry) => entry.positive),
          fill: false,
          borderColor: '#4bc0c0',
          backgroundColor: '#9de2ff',
        },
      ],
    };
  }

  updateChart(): void {
    this.chartData = {
      ...this.chartData,
      options: {
        ...this.chartData.options,
        animation: {
          duration: this.selectedChartType === 'bar' ? 1000 : 500,
        },
      },
    };
  }
}

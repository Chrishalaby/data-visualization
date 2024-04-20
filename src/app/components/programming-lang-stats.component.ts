import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DataService } from '../DataService.service';

@Component({
  selector: 'app-programming-language-stats',
  standalone: true,
  imports: [CommonModule, ChartModule, SelectButtonModule, FormsModule],
  template: `
    <div>
      <p-selectButton
        [options]="chartTypes"
        [(ngModel)]="selectedChartType"
        (onChange)="updateChart()"
      ></p-selectButton>
      <p-selectButton
        [options]="dataTypes"
        [(ngModel)]="selectedDataType"
        (onChange)="updateChart()"
      ></p-selectButton>
      <span>
        @if (selectedChartType == 'bar') {
        <p-chart
          type="bar"
          [data]="chartData"
          [options]="chartOptions"
        ></p-chart>

        } @else if (selectedChartType == 'pie') {
        <p-chart
          type="pie"
          [data]="chartData"
          [options]="chartOptions"
          height="800px"
        ></p-chart>
        } @else if (selectedChartType == 'line') {
        <p-chart
          type="line"
          [data]="chartData"
          [options]="chartOptions"
        ></p-chart>
        }
      </span>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgrammingLanguageStatsComponent implements OnInit {
  chartTypes = ['bar', 'pie', 'line'];
  dataTypes = ['languages', 'ides', 'databases'];
  selectedChartType = 'bar';
  selectedDataType = 'languages';
  chartData: any;
  chartOptions: any;

  constructor(
    private dataService: DataService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.updateChart();
  }

  updateChart() {
    this.dataService.getData().subscribe((data) => {
      const selectedData = data[this.selectedDataType];
      this.chartData = {
        labels: selectedData.map((item: any) => item.name),
        datasets: [
          {
            label: 'Share',
            data: selectedData.map((item: any) => item.share),
          },
          {
            label: 'Trend',
            data: selectedData.map((item: any) => item.trend),
          },
        ],
      };
      this.chartOptions = {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Name',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      };
      this.cdr.detectChanges();
    });
  }
}

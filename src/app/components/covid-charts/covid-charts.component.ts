import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-covid-charts',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>covid-charts works!</p>`,
  styleUrl: './covid-charts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidChartsComponent { }

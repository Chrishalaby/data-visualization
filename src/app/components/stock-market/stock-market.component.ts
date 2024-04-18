import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stock-market',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>stock-market works!</p>`,
  styleUrl: './stock-market.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockMarketComponent { }

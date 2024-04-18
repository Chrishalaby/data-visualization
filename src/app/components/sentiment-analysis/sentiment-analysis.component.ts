import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sentiment-analysis',
  standalone: true,
  imports: [CommonModule],
  template: `<p>sentiment-analysis works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SentimentAnalysisComponent {}

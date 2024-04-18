import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-segmentation',
  standalone: true,
  imports: [CommonModule],
  template: `<p>customer-segmentation works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSegmentationComponent {}

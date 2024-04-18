import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-segmentation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>customer-segmentation works!</p>`,
  styleUrl: './customer-segmentation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSegmentationComponent { }

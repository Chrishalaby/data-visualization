import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-climate-change',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>climate-change works!</p>`,
  styleUrl: './climate-change.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClimateChangeComponent { }

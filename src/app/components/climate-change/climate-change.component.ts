import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-climate-change',
  standalone: true,
  imports: [CommonModule],
  template: `<p>climate-change works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClimateChangeComponent {}

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataService } from '../DataService.service';

@Component({
  selector: 'app-random-user',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <p-button label="Generate" (onClick)="generate()"></p-button>
    <p-card *ngIf="user">
      <img
        [src]="user.picture.large"
        [alt]="user.name.first + ' ' + user.name.last"
      />
      <h4>{{ user.name.first }} {{ user.name.last }}</h4>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
    </p-card>
    <p>
      Source: <a href="https://randomuser.me" target="_blank">randomuser.me</a>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomUserComponent implements OnInit {
  user: any;

  constructor(
    private dataService: DataService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.generate();
  }

  generate() {
    this.dataService.getRandomUser().subscribe((data) => {
      this.user = data.results[0];
      this.cdr.detectChanges();
    });
  }
}

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DataService } from '../DataService.service';

@Component({
  selector: 'app-github-repos',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
  template: `
    <h3>Github Repositories of {{ username }}</h3>
    <input
      type="text"
      pInputText
      [(ngModel)]="username"
      placeholder="Enter GitHub username"
    />
    <button pButton type="button" (click)="fetchRepos()" label="Fetch"></button>
    <p-table [value]="repos">
      <ng-template pTemplate="header">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Language</th>
          <th>Stars</th>
          <th>Forks</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-repo>
        <tr>
          <td>
            <a [href]="repo.html_url" target="_blank">{{ repo.name }}</a>
          </td>
          <td>{{ repo.description }}</td>
          <td>{{ repo.language }}</td>
          <td>{{ repo.stargazers_count }}</td>
          <td>{{ repo.forks_count }}</td>
        </tr>
      </ng-template>
    </p-table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitHubReposComponent implements OnInit {
  repos: any[] = [];
  username: string = 'chrishalaby';

  constructor(
    private dataService: DataService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fetchRepos();
  }

  fetchRepos() {
    if (this.username.trim()) {
      this.dataService.getGitHubUserRepos(this.username).subscribe(
        (data) => {
          this.repos = data;
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error fetching repos:', error);
          this.repos = [];
          this.cdr.detectChanges();
        }
      );
    }
  }
}

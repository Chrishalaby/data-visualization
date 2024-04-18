import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl =
    'https://madnight.github.io/githut/gh-pull-request/pull_request_data/data-2023-1-quarter.json';

  constructor(private http: HttpClient) {}

  getCovidData(): Observable<any> {
    return this.http.get('https://api.covidtracking.com/v1/us/daily.json');
  }

  getWeatherData(city: string): Observable<any> {
    const apiKey = `aca81f155c7ad0bfb0851ff827f85d83`;
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
  }

  getGitHubUserRepos(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

  getRandomUser(): Observable<any> {
    return this.http.get('https://randomuser.me/api/');
  }

  getProgrammingLanguagesStats(): Observable<any> {
    // Fetching the most popular languages by the number of repositories on GitHub
    return this.http
      .get(
        'https://api.github.com/search/repositories?q=language:&sort=stars&order=desc'
      )
      .pipe(
        map((response: any) => {
          // Group by language and count the number of repositories for each
          const languages = response.items.reduce((acc: any, item: any) => {
            const language = item.language || 'Other';
            acc[language] = (acc[language] || 0) + 1;
            return acc;
          }, {});
          // Convert to array suitable for charting
          return Object.keys(languages).map((key) => ({
            name: key,
            count: languages[key],
          }));
        })
      );
  }

  getGitHubLangStats(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

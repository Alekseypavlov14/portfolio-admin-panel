import { Injectable } from '@angular/core';

interface Options {
  body?: string,
  method?: string
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://aleksey-portfolio-api.herokuapp.com';

  constructor() {}

  request(endpoint: string, options?: Options) {
    const url = this.url + endpoint;

    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    }).then((res) => res.json());
  }
}

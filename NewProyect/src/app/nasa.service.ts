import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'Z9qvIzCOBNIkImNCzxaYwCvL81zbInit59mTOlZw';

  constructor(private http: HttpClient) { }

  getImageOftheDay(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}`);
  }

}

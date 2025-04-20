import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, lastValueFrom, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}
  
  url = 'http://localhost:3000/api/trips';
  apiBaseUrl = 'http://localhost:3000/api';
  
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }
  
  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }
  
  getTrip(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.url}/${tripCode}`);
  }
  
  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.url}/${formData.code}`, formData);
  }
  
  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  } 
  
  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }
  
  private async makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    
    try {
      const response = await lastValueFrom(
        this.http.post<AuthResponse>(url, user).pipe(
          catchError(this.handleError)
        )
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Something went wrong';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `${error.status}: ${error.error.message || 'Server error'}`;
    }
    return throwError(() => errorMessage);
  }
}
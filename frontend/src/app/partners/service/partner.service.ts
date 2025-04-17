import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';  // throwError est dans 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private apiUrl = 'http://localhost:8080/api/partners';

  constructor(private http: HttpClient) {}

  getPartners(page: number = 0, size: number = 50): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(this.apiUrl, { params });
  }
  addPartner(partner: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, partner);
  }

  deletePartner(partnerId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${partnerId}`).pipe(
      catchError(this.handleError)
    );;
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    // En cas d'erreur, on vérifie si c'est une erreur 409 (conflict)
    if (error.status === 409) {
      return throwError('This partner has associated messages. Deletion not allowed.');
    }
    return throwError('An error occurred. Please try again later.');
  }
}

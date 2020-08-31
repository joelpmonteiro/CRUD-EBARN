import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TractorsService {
  urlBackEnd = "http://localhost:3000/ebarn/";

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  searchAllTractors(): Observable<any> {
    let sendBackEnd = `http://localhost:3000/ebarn/selectedAllTractors`;
    return this.httpClient.get(sendBackEnd, { observe: 'response' })
  }
  saveTractors(dados): Observable<any> {
    console.log('dados angular: ', dados);
    let sendBackEnd = `http://localhost:3000/ebarn/createTractors`;
    let arraydados = {
      tractor: dados.dados.value,
      img: dados.img
    }
    // console.log(dados.dados.value)
    // console.log(arraydados)
    return this.httpClient.post(sendBackEnd, arraydados, { observe: 'response' });
  }
  deleteTractors(item): Observable<any> {
    console.log(item);
    let sendBackEnd = `http://localhost:3000/ebarn/deleteTractors`; //{ observe: 'response' }
    return this.httpClient.delete(`${sendBackEnd}/${item.id}/${item.nameTractors}`, { observe: 'response' });

  }
  deleteAllTractors(): Observable<any> {
    let sendBackEnd = `http://localhost:3000/ebarn/deleteAllTractors`;
    return this.httpClient.delete(sendBackEnd, { observe: 'response' });

  }
  updateTractors(item): Observable<any> {
    console.log(JSON.stringify(item.value));

    let sendBackEnd = `http://localhost:3000/ebarn/updateTractors`;
    return this.httpClient.put(sendBackEnd, item.value, { observe: 'response' });

  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log('back END: ', error)
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}

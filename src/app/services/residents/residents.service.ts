import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {
private url: String;

  constructor(private http: HttpClient ) {
    this.url = environment.URL_SecurityPaymentControl_RestApi;
   }

   getResidents(){
     const url = this.url+'api/resident/get-all-residents';
     return this.http.get(url);
   }
}

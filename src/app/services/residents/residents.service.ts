import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResidentInformationModel } from 'src/app/models/ResidentInformationModel';
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

   saveResident(request: ResidentInformationModel){
    const url = this.url+'api/resident/save-resident';
    return this.http.post(url, request);
  }
}

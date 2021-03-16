import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private Http: HttpClient) { }
  getRates(base: string){
    return this.Http.get(`https://api.exchangeratesapi.io/latest?base=${base}`);
  }
}

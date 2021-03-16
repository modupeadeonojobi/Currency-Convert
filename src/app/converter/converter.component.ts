import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  currencyForm: FormGroup;

  exchangeList: any;
  arr: any;
  base: any;
  currency: any;

  amount: any;
  from: any;
  to: any;
  rate: any;
  mile: number;

  convertedValue: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.getExchangeRate('USD');
    this.initializeCurrencyForm();
  }

  ngOnInit(): void { }

  initializeCurrencyForm(): any {
    return this.currencyForm = this.formBuilder.group({
      currency: ['', Validators.required],
      base: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  getExchangeRate(base: any): any {
    this.http.get('https://api.exchangeratesapi.io/latest?base=' + base)
      .subscribe((data: any) =>
        this.exchangeList = data.rates
      );
  }

  baseChange(event: any): any {
    const selected = event.target.value;
    this.getExchangeRate(selected);

    this.currencyForm.controls.currency.setValue(1);
    this.rate = 1;
  }

  convertChange(event: any): any {
    const selected = event.target.value;
    this.rate = selected;
  }

  converter(): any {
    this.convertedValue = +this.currencyForm.controls.amount.value * +this.rate;
    console.log(this.convertedValue);
  }

  getMiles(value: number): any {
    this.mile =  value;

  }


}

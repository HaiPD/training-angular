import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public serviceproperty = "Service Created";

  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  showTodayDate() {
    let today = new Date();
    return today;
  }

  getData() {
    return this.httpClient.get(this.apiurl);
  }
}

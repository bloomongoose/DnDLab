import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  apiUrl:string = "https://grandcircusco.github.io/demo-apis/donuts";

  constructor(private http: HttpClient) { }

  getDonuts():any {
    return this.http.get(this.apiUrl + ".json")
  }

  getDonutById(id:number):any{
    return this.http.get(this.apiUrl + "/" + id + ".json")
  }
}

import { Injectable } from '@angular/core';

//import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class EnvironmentsService {
  
  configUrl:any = "http://localhost:5000/environments";
  constructor(private http:HttpClient) { }
  getEnvironments(){
    return this.http.get(this.configUrl);
  }
}



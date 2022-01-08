import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Details } from './details';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 _url="https://localhost:3000/Service";
 
  constructor(private _http:HttpClient) {}
    Service(u1:Details){
return this._http.post<any>(this._url,u1);
    }
    



}

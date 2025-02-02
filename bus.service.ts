import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bus } from '../model/bus';

@Injectable({
  providedIn: 'root'
})
export class BusService 
{

  private apiUrl="http://localhost:3000/buses";

  constructor(private http:HttpClient) 
  { 

  }

  addBus(bus:Bus):Observable<any>
  {
    return this.http.post<any>(this.apiUrl,bus);
  }

  getBusById(id:any):Observable<any>
  {
    return this.http.get<any>(this.apiUrl+"/"+id).pipe(map((data)=>
    {
      if(Array.isArray(data))
      {
        return data;
      }
      else
      {
        return [data];
      }
    }))
  }

  getBuses():Observable<any>
  {
    return this.http.get<any>(this.apiUrl);
  }

  updateBus(id:any,bus:Bus):Observable<any>
  {
    return this.http.put<any>(this.apiUrl+"/"+id,bus);
  }

  deleteBus(id:any):Observable<any>
  {
    return this.http.delete<any>(this.apiUrl+"/"+id);
  }
  
}

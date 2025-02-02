import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBus'
})
export class BusPipe implements PipeTransform {

  transform(buses:any[],searchTerm:string): any[] 
  {
    if(!searchTerm)
    {
      return buses;
    }
    const search=searchTerm.trim().toLowerCase();
    return buses.filter((bus)=>
    {
      // return bus.id.toString().includes(search) || bus.busNumber.toLowerCase().includes(search);
      return JSON.stringify(bus).toLowerCase().includes(search);
    })
  }

}

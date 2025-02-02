import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Bus } from 'src/app/model/bus';
import { BusService } from 'src/app/service/bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit
{

  buses$:Observable<any>=of([]);
  filteredBuses$:Observable<any>=of([]);
  
  searchTerm:string='';
  
  constructor(private bs:BusService)
  {
  
  }

  ngOnInit(): void 
  {
    this.getAllBuses();
  }

  getAllBuses()
  {
    this.buses$=this.bs.getBuses();
    this.filteredBuses$=this.buses$.pipe(map((buses)=>
    {
      return this.sortBusesByDate(buses);
    }))
  }

  deleteBus(id:any)
  {
    this.bs.deleteBus(id).subscribe(()=>this.getAllBuses());
  }

  sortBusesByDate(buses:any[]):any[]
  {
    return buses.sort((a,b)=>a.bookingDate.localeCompare(b.bookingDate));
  }

}

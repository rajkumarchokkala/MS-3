import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Bus } from 'src/app/model/bus';
import { BusService } from 'src/app/service/bus.service';

@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.scss']
})
export class ViewBusComponent implements OnInit
{

busId:any;
buses$:Observable<Bus[]>=of([]);

constructor(private bs:BusService,private route:ActivatedRoute)
{

}
ngOnInit(): void 
{
  this.busId=this.route.snapshot.params['id'];
  this.getBusById(this.busId);
}

getBusById(id:any)
{
  this.buses$=this.bs.getBusById(id);
}

}

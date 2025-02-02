import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from 'src/app/model/bus';
import { BusService } from 'src/app/service/bus.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.scss']
})
export class AddBusComponent implements OnInit 
{

busId:any;

busForm!:FormGroup;

constructor(private bs:BusService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router)
{

}

ngOnInit(): void 
{
  // this.busId=this.route.snapshot.params['id'];

  // this.route.params.subscribe(d=>
  // {
  //   this.busId=d['id'];
  // }
  // )

  this.route.paramMap.subscribe(r=>
  {
    this.busId=r.get('id');

    this.bs.getBusById(this.busId).subscribe(d=>
    {
      this.busForm.patchValue(d[0]);
    }
    )
  }
  )
   this.busForm=this.fb.group(
    {
    busNumber:['',Validators.required],
    routeSource:['',Validators.required],
    routeDestination:['',Validators.required],
    passengerName:['',Validators.required],
    bookingDate:['',Validators.required]
    }
   ) 
}

addOrEditBus()
{
  if(this.busForm.valid)
  {
    const bus:Bus=this.busForm.value;

    if(this.busId)
    {
      this.bs.updateBus(this.busId,bus).subscribe();
      alert('updated successfully');
      this.busForm.reset();
      this.router.navigateByUrl('bus-list');
    }
    else
    {
      this.bs.addBus(bus).subscribe();
      alert('added successfully');
      this.busForm.reset();
      this.router.navigateByUrl('bus-list');
    }
  }
}
}

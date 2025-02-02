import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './components/add-bus/add-bus.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { ViewBusComponent } from './components/view-bus/view-bus.component';

const routes: Routes = 
[
  {path:'add-bus',component:AddBusComponent},
  {path:'bus-list',component:BusListComponent},
  {path:'view-bus/:id',component:ViewBusComponent},
  {path:'edit-bus/:id',component:AddBusComponent},
  {path:'',redirectTo:'/bus-list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

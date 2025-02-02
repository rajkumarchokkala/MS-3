import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pattern } from './model/pattern';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit 
{
  patternForm!: FormGroup;

  pattern:Pattern=new Pattern();
  
  constructor(private formBuilder: FormBuilder) 
  {

  }
  
  ngOnInit(): void 
  {
    this.patternForm = this.formBuilder.group(
      {
        username:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9.' '_]{3,20}$")]],
        password:['',[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[._!@#$%^&*])[A-Za-z0-9._!@#$%^&*]{8,20}$")]],
        email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
        date: ['',[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
        price: ['',[Validators.required,Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
        mobileNumber: ['',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]] //^\+91-[6-9]\d{9}$=>with country code
      }
    )
  }

  onSubmit()
  {
    if(this.patternForm.valid)
    {
      alert('Success...')
    }
    else
    {
      this.patternForm.markAllAsTouched();
    }
  }
}

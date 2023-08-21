import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-offer-ride-component',
  templateUrl: './offer-ride-component.component.html',
  styleUrls: ['./offer-ride-component.component.css']
})
export class OfferRideComponentComponent {
regForm!:FormGroup;
submited=false;
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
    this.regForm=new FormGroup({
      name:new FormControl("",Validators.required),
      startlocation:new FormControl("",Validators.required),
      destination:new FormControl("",Validators.required),
      car:new FormControl("",Validators.required),
      seats:new FormControl("",[Validators.required,this.Seats()])
    });
  }
  OnSubmit(){
    this.submited=true;
    if(this.regForm.valid){
      alert("form is successfully submited");
      this.regForm.reset();
      this.submited=false;

    }
  }
  private Seats():ValidatorFn{
    return(control:AbstractControl):{[key:string]:any} | null=>{
      const value=control.value;
      if (value!==null && (isNaN(value)|| value < 1 ||value >7)){
        return {seatinvalid:true};
      }
      return null;
    }
    
  }
}

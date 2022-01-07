import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  countries: Country[] = [
    {value: 'Ind', viewValue: 'INDIA'},
    {value: 'Aus', viewValue: 'Australlia'},
    {value: 'Eng', viewValue: 'England'},
    {value: 'USA', viewValue: 'United States'},
  ];

  secondForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    companyName: new FormControl('',Validators.required),
    courseCode: new FormControl('',Validators.required),
    deliveryMethod: new FormControl('',Validators.required),
    checkBoxPrivacy:new FormControl('',Validators.required),

  });
  

  constructor() { }

  ngOnInit(): void {
    
  }

}

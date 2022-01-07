import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  firstForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    todayDate: new FormControl('',Validators.required),
    orderDueDate: new FormControl('',Validators.required),
    deliveryMethod: new FormControl('',Validators.required),
    

  });

  constructor() { }

  ngOnInit(): void {
  }

}

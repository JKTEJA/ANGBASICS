import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
v!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.v=new FormGroup({
      fullName:new FormControl(),
      password:new FormControl(),
    }) 
  }
  a(){
    console.log(this.v.value)
  }
}

import { Component, OnInit } from '@angular/core';
import { Details } from '../details';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  courses=['ang','js','react','php'];
c1=true;
d2=new Details("snd","jk@gmail.com","***","ang");
  constructor() { }

  ngOnInit(): void {
  }
v1(value: any): void{
if(value==='default'){
  this.c1=true;
}
else{
  this.c1=false;
}
}
j1(){
  console.log(this.d2)
}

}

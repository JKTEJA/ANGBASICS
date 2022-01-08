import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name="jakkateja";
  jkteja="iloveyou";
  v1=new Date();


  constructor() { }

  ngOnInit(): void {
  }

}

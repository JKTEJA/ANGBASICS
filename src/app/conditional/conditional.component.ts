import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {

courses=['ang','js','react','php'];
age=18;
view="A1";

  constructor(private e1:ServiceService) { }

  ngOnInit(): void {
  }

}

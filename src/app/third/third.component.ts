import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  @Input() item:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

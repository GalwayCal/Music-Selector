import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambientlistcard',
  templateUrl: './ambientlistcard.component.html',
  styleUrls: ['./ambientlistcard.component.css']
})
export class AmbientlistcardComponent implements OnInit {

  @Input() amvList: any;
  
  constructor() { }

  ngOnInit() {
  }

}

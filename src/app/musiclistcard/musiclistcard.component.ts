import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-musiclistcard',
  templateUrl: './musiclistcard.component.html',
  styleUrls: ['./musiclistcard.component.css']
})
export class MusiclistcardComponent implements OnInit {

    @Input() list: any;

  constructor() { }

  ngOnInit() {
  }

}

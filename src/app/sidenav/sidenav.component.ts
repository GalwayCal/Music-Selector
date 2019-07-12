import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { filter } from 'minimatch';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() filterChanged: EventEmitter<any> = new EventEmitter();

  public categories: Array<string> = [
      'Acoustic', 'Alternative', 'Club, Dance and Party', 'Commercial Radio & Pop ',
      'Country', 'Electronic/House', 'Funk and Soul', 'Hip Hop, RnB and Urban', 'Instrumental and Relaxation',
      'Jazz', 'Reggae','Rock', 
  ];
  public amvCategories: Array<string> = [
    'Sport', 'Lounge', 'Redbull', 'Nightclub', 'Style', 'Fashion', 'Adults Only', 'Kids', 
];


  private selected: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  public onClick(category: string): void {
    console.log(category);
    if (this.selected.includes(category)) {
      const index = this.selected.indexOf(category);
      this.selected.splice(index, 1);
    } else {
        this.selected.push(category);
    }
    const filter = {
      categories: this.selected,
      amvCategories: this.selected,
    };
    this.filterChanged.emit(filter);
  }
  

  
}

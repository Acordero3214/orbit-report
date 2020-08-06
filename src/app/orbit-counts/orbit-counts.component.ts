import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }
  count() {
    let typeArray = ["Space Debris", "Communication", "Probe", "Positioning", "Space Station", "Telescope"];
    let objectTypeArray = [0, 0, 0, 0, 0, 0];
    
    for(let i = 0; i < this.satellites.length; i++) {
      for(let j = 0; j < typeArray.length; j++) {
        if(this.satellites[i].type === typeArray[j]) {
          objectTypeArray[j] += 1;
        }
      }
    }
    let countObject = {
      total: this.satellites.length,
      spaceDebris: objectTypeArray[0],
      communication: objectTypeArray[1],
      probe: objectTypeArray[2],
      positioning: objectTypeArray[3],
      spaceStation: objectTypeArray[4],
      telescope: objectTypeArray[5]
    }
    return countObject;
  }
}

      // if(this.satellites[i].type === "Space Debris") {
      //   countObject.spaceDebris += 1;
      // }
      // else if(this.satellites[i].type === "Communication") {
      //   countObject.communication += 1;
      // }
      // else if(this.satellites[i].type === "Probe") {
      //   countObject.probe += 1;
      // }
      // else if(this.satellites[i].type === "Positioning") {
      //   countObject.positioning += 1;
      // }
      // else if(this.satellites[i].type === "Space Station") {
      //   countObject.spaceStation += 1;
      // }
      // else if(this.satellites[i].type === "Telescope") {
      //   countObject.telescope += 1;
      // }
import { Component, OnInit, Input } from '@angular/core';
import { RacesComponent } from '../races/races.component';

@Component({
  selector: 'race', //changed from app-race
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  @Input() race;

  constructor(
      private racesComponent: RacesComponent //gives access to RacesComponent methods within Race (see line 2)
    ) { }

  ngOnInit() {
  }

  castDate(date) {
    return new Date(date);
  }

  enterRace(){
    this.racesComponent.enterRace(this.race) //this.race is because of @Input() race; on ine 11
  }

  cancelRace(){
    this.racesComponent.cancelRace(this.race)
  }

}

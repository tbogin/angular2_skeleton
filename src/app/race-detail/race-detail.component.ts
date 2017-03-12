import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {

  private raceId; //raceId is set as a class property in order to be used in ngOnInit to give each race a shwo page

  constructor(
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.forEach(
        (params: Params) => this.raceId = params['id']
      ); //this is where you'd make an API call
  }

}

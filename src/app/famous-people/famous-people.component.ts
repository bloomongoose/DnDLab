import { Component, OnInit } from '@angular/core';
import { Dev } from '../dev';
import { HallOfFameService } from '../hall-of-fame.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  devs:Dev[] = [];

  constructor(private service:HallOfFameService) { }

  ngOnInit(): void {
    this.service.getDevs().subscribe((response:any) => {
      console.log(response);
      this.devs = response.complete;
      console.log(this.devs);
    });
  }

}

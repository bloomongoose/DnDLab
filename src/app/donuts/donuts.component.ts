import { Component, OnInit } from '@angular/core';
import { Donut } from '../donut';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donutList:Donut[] = [];

  constructor(private service:DonutService) { }

  ngOnInit(): void {
    this.service.getDonuts().subscribe((response:any) => {
      console.log(response);
      this.donutList = response.results;
      console.log(this.donutList);
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Dev } from '../dev';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent implements OnInit {
  @Input() dev:Dev = {} as Dev;

  display:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay():void{
    this.display = !this.display;
  }

}

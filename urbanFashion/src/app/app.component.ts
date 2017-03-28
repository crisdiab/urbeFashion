import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{
  public title:string;
  public subTitle:string;
  public navToggle: boolean = false;

  constructor() { }

  ngOnInit(){
    this.title = 'Angular 2 Full-Screen';
    this.subTitle = 'menu / navigation';
  }

  toggleNav(){
    this.navToggle = !this.navToggle;
  }

}

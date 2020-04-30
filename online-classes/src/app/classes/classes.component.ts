import { Component, OnInit } from '@angular/core';
// import { Classes } from '../claases';
import { LISTOFCLASSES } from '../mock-classesList'

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //define list and shows on ui
  classInfos = LISTOFCLASSES;
  //Define 1 object 
  // classInfo : Classes = {
  //   id : 1,
  //   name : "Angular 9"
  // }
}

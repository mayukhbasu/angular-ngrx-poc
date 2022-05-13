import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css']
})
export class GrandparentComponent implements OnInit {

  textInput: any;
  dataToParent: any;
  users = [
    {id:1, name: "Mayukh"},
    {id:2, name: "Kazuya"},
    {id:3, name: "Jin"},
    {id:4, name: "heihachi"},
    {id:5, name: "Eddy"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  sendToChild(): void {
    console.log("Button clicked");
    //this.dataToParent = {data: this.textInput}
    this.users[0] = {...this.users[0], name: "Armor King"};
    //this.users[0].name = "King";
  }

}

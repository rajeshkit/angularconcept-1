import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strdemo',
  templateUrl: './strdemo.component.html',
  styleUrls: ['./strdemo.component.css']
})
export class StrdemoComponent implements OnInit {
  isCompleted = true;
  book=null;
  contentStyle = "content";
  mainContentStyle="maincontent";
  myStyle={
    "font-size": "5em",
    "color": "blue"
  };
  book1 = {
      "isbn":1000,
      "title":"Java Programming",
      "cost":2000,
      "year":2022
  }
  bookTitle=["java","c","c++","python","C#"];
  books = [
    {
    "isbn":1000,
    "title":"Java Programming",
    "cost":2000,
    "year":2022
    },
    {
      "isbn":1001,
      "title":"C Programming",
      "cost":200,
      "year":2021
      },
      {
        "isbn":1002,
        "title":".NET Programming",
        "cost":1400,
        "year":2020
      }
];
  constructor() { }

  ngOnInit(): void {
  }

}

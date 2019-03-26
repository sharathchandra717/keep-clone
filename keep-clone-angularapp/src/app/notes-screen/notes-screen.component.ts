import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-screen',
  templateUrl: './notes-screen.component.html',
  styleUrls: ['./notes-screen.component.scss']
})
export class NotesScreenComponent implements OnInit {
public temp = [
  {
    'title':'test',
    'desc':'value'
  },
  {
    'title':'test',
    'desc':'value'
  },
  {
    'title':'test',
    'desc':'value'
  },
  {
    'title':'test',
    'desc':'value'
  },
  {
    'title':'test',
    'desc':'value'
  },
  {
    'title':'test',
    'desc':'value'
  }
]
  constructor() { }

  ngOnInit() {
  }

}

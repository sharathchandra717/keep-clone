import { Component, OnInit } from '@angular/core';
import { NotesService } from "./notes.service";

@Component({
  selector: 'app-notes-screen',
  templateUrl: './notes-screen.component.html',
  styleUrls: ['./notes-screen.component.scss']
})
export class NotesScreenComponent implements OnInit {

  constructor(private readonly notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes();
  }

}

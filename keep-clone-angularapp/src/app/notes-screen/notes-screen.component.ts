import { Component, OnInit } from '@angular/core';
import { NotesService } from "./notes.service";

@Component({
  selector: 'app-notes-screen',
  templateUrl: './notes-screen.component.html',
  styleUrls: ['./notes-screen.component.scss']
})
export class NotesScreenComponent implements OnInit {

  notes: any[] = [];

  constructor(private readonly notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe((notes: any) => {
      this.notes = notes.result;
      // console.log(this.notes);

    }, (err) => {
      console.log(err);
    });
  }

}

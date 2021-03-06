import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NotesService } from "../notes-screen/notes.service";
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  noteForm: FormGroup;
  viewMode = false;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly notesService: NotesService,
    private readonly router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      'title': ["", []],
      'note': ["", []]
    });
    if (localStorage.getItem('loggedIn') === null) {
      this.router.navigate(['/home']);
    }
  }

  createNote() {
    // console.log((this.noteForm.value.title).trim());
    if (this.noteForm.value.title != null && this.noteForm.value.note != null) {
      if ((this.noteForm.value.title).trim() != "" || (this.noteForm.value.note).trim() != "") {
        this.notesService.createNote(this.noteForm.value).subscribe((result: any) => {
          if (result.success === true) {
            this.notesService.getNotes();
            this.snackBar.open("Note created", "Dismiss", {
              duration: 2500,
            });
            this.noteForm.reset();
          }
          else {
            alert("Something went wrong.");
          }
        });
      }
      else {
        alert("Title or Note is required");
      }
    }
    else {
      alert("Title or Note is required");
    }
  }

}




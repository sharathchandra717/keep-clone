import { Component, OnInit, Inject } from '@angular/core';
import { NotesService } from "./notes.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';


export interface DialogData {
  title: string;
  note: string;
  id: number;
}
@Component({
  selector: 'app-notes-screen',
  templateUrl: './notes-screen.component.html',
  styleUrls: ['./notes-screen.component.scss']
})
export class NotesScreenComponent implements OnInit {

  constructor(private readonly notesService: NotesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.notesService.getNotes();
  }

  openDialog(obj): void {
    const dialogRef = this.dialog.open(DialogBox, {
      width: '400px',
      data: { title: obj.title, note: obj.note, id: obj.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log(result);
        if ((result.title).trim() != "" || (result.note).trim() != "") {
          this.notesService.updateNote(result).subscribe((result: any) => {
            if (result.success === true) {
              this.notesService.getNotes();
              this.snackBar.open("Note updated", "Dismiss", {
                duration: 2500,
              });
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
    });
  }

}

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.html',
  styleUrls: ['./dialog-box.css']
})
export class DialogBox {

  constructor(
    public dialogRef: MatDialogRef<DialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private readonly notesService: NotesService,
    private snackBar: MatSnackBar) { }

  delete(id) {
    this.notesService.delete(id).subscribe((result: any) => {
      if (result.success === true) {
        this.notesService.getNotes();
        this.snackBar.open("Note deleted", "Dismiss", {
          duration: 2500,
        });
      }
      else {
        alert("Something went wrong.");
      }
    });
  }
}

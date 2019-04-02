import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes:any;

  constructor(private readonly http: HttpClient) { }

  getNotes() {
    this.http.get("http://localhost:3000/api/user-posts?uid=" + localStorage.getItem('id')).subscribe((notes: any) => {
      this.notes = notes.result;
    }, (err) => {
      console.log(err);
    });
  }

  createNote(payload) {
    return this.http.post("http://localhost:3000/api/user-posts", {
      "uid": localStorage.getItem('id'),
      "title": payload.title,
      "note": payload.note
    });
  }

  updateNote(payload){
    return this.http.put("http://localhost:3000/api/user-posts", {
      "id": payload.id,
      "title": payload.title,
      "note": payload.note
    });
  }

  delete(id){
    return this.http.delete("http://localhost:3000/api/user-posts?id="+id);
  }

}

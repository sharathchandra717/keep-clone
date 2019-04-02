import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { NotesScreenComponent, DialogBox } from './notes-screen/notes-screen.component';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderNavComponent,
    NotesScreenComponent,
    RegisterComponent,
    NotFoundComponent,
    CreateNotesComponent,
    DialogBox
  ],
  entryComponents: [DialogBox],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }

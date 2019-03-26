import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent {

  userDetails: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private readonly router: Router, ) { }

  ngOnInit() {
    this.userDetails = {
      'id': +localStorage.getItem('id'),
      'username' : localStorage.getItem('username'),
      'firstname': localStorage.getItem('firstname'),
      'lastname': localStorage.getItem('lastname')
    }
    // console.log(this.userDetails);
    
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}

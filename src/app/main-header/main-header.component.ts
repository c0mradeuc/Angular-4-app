import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}

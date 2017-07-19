import { Observable } from 'rxjs/Observable';
import { SignUp } from './models/sign-up';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUp = new SignUp();
  user: Observable<firebase.User>;
  creationErrorMsg: String = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user) {
        this.router.navigateByUrl('');
      }
    });
  }

  createUser() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.signUp.email, this.signUp.password)
      .catch(err => {
        this.creationErrorMsg = err.message;
      }
      );
  }
}

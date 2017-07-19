import { Login } from './models/login';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logIn: Login = new Login('jmontanonunez@gmail.com', '870621345');
  user: Observable<firebase.User>;
  loginErrorMsg: String = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.logIn.email, this.logIn.password)
      .catch(err => {
        this.loginErrorMsg = err.message;
      });
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user) {
        this.router.navigateByUrl('');
      }
    });
  }
}

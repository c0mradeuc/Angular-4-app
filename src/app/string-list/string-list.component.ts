import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.css']
})
export class StringListComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/strings');
    this.items.subscribe((a) => { console.log(a); });
   }

  ngOnInit() {
  }

}

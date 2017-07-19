import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-string',
  templateUrl: './create-string.component.html',
  styleUrls: ['./create-string.component.css']
})
export class CreateStringComponent implements OnInit {
  newString: string;

  constructor(private db: AngularFireDatabase) {
   }

  ngOnInit() {
  }

  addString() {
    this.db.list('/strings').push(this.newString).catch((error) => { console.log(error); });
  }
}

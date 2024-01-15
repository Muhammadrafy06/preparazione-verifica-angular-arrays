import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class UserItemComponent implements OnInit {
  macchine: string[]; // <-- aggiunta la proprietà name
  constructor() { 
    this.macchine = ["bulldozer", "cane", "gatto da cantiere", "quandle dingle"];
  }
  ngOnInit() {
  }
}

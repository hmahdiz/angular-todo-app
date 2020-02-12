import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() onFilter = new EventEmitter();;

  constructor() { }

  ngOnInit() {
  }

  setFilter(filter:number) {
    this.onFilter.emit(filter)
  }
}

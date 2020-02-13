import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  selectedFilter: object;
  filterList = [{ id: 1, name: 'All', isSelected: false }, { id: 2, name: 'Completed' }, { id: 3, name: 'Active' }];
  @Output() onFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selectFilter(this.filterList[0]);
  }

  selectFilter(filter) {
    this.filterList.forEach(f => f.id === filter.id ? f.isSelected = true : f.isSelected = false);
    this.onFilter.emit(filter);
  }
}

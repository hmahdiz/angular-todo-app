import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFilterListComponent } from './todo-filter-list.component';

describe('TodoFilterListComponent', () => {
  let component: TodoFilterListComponent;
  let fixture: ComponentFixture<TodoFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

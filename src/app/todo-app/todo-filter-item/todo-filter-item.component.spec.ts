import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFilterItemComponent } from './todo-filter-item.component';

describe('TodoFilterComponent', () => {
  let component: TodoFilterItemComponent;
  let fixture: ComponentFixture<TodoFilterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFilterItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

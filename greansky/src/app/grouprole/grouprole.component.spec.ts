import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouproleComponent } from './grouprole.component';

describe('GrouproleComponent', () => {
  let component: GrouproleComponent;
  let fixture: ComponentFixture<GrouproleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouproleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouproleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListRowComponent } from './account-list-row.component';

describe('AccountListRowComponent', () => {
  let component: AccountListRowComponent;
  let fixture: ComponentFixture<AccountListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

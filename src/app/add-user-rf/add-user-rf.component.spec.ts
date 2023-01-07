import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRfComponent } from './add-user-rf.component';

describe('AddUserRfComponent', () => {
  let component: AddUserRfComponent;
  let fixture: ComponentFixture<AddUserRfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserRfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

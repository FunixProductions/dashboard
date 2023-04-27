import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketsDoneListComponent} from './tickets-done-list.component';

describe('TicketsDoneListComponent', () => {
  let component: TicketsDoneListComponent;
  let fixture: ComponentFixture<TicketsDoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsDoneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsDoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

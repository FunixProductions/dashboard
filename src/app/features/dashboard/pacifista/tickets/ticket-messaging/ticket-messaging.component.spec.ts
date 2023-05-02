import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketMessagingComponent} from './ticket-messaging.component';

describe('TicketMessagingComponent', () => {
  let component: TicketMessagingComponent;
  let fixture: ComponentFixture<TicketMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketMessagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

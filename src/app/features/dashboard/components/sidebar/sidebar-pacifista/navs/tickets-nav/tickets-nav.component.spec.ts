import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketsNavComponent} from './tickets-nav.component';

describe('TicketsNavComponent', () => {
  let component: TicketsNavComponent;
  let fixture: ComponentFixture<TicketsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

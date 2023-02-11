import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchEventsubModalComponent } from './twitch-eventsub-modal.component';

describe('TwitchEventsubModalComponent', () => {
  let component: TwitchEventsubModalComponent;
  let fixture: ComponentFixture<TwitchEventsubModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchEventsubModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchEventsubModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

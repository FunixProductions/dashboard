import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchEventsubComponent } from './twitch-eventsub.component';

describe('TwitchEventsubComponent', () => {
  let component: TwitchEventsubComponent;
  let fixture: ComponentFixture<TwitchEventsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchEventsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchEventsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

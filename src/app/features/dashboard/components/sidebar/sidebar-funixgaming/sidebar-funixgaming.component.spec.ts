import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarFunixgamingComponent} from './sidebar-funixgaming.component';

describe('SidebarFunixgamingComponent', () => {
  let component: SidebarFunixgamingComponent;
  let fixture: ComponentFixture<SidebarFunixgamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFunixgamingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFunixgamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

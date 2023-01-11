import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFunixprodComponent } from './sidebar-funixprod.component';

describe('SidebarFunixprodComponent', () => {
  let component: SidebarFunixprodComponent;
  let fixture: ComponentFixture<SidebarFunixprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFunixprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFunixprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

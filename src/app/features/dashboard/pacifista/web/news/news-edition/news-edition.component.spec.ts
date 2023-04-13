import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsEditionComponent} from './news-edition.component';

describe('NewsEditionComponent', () => {
  let component: NewsEditionComponent;
  let fixture: ComponentFixture<NewsEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

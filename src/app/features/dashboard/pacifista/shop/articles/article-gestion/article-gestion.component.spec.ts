import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleGestionComponent} from './article-gestion.component';

describe('ArticleGestionComponent', () => {
  let component: ArticleGestionComponent;
  let fixture: ComponentFixture<ArticleGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

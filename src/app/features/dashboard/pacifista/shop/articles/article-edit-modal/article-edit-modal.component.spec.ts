import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleEditModalComponent} from './article-edit-modal.component';

describe('ArticleEditModalComponent', () => {
  let component: ArticleEditModalComponent;
  let fixture: ComponentFixture<ArticleEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

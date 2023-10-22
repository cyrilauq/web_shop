import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWrapperComponent } from './news-wrapper.component';

describe('NewsWrapperComponent', () => {
  let component: NewsWrapperComponent;
  let fixture: ComponentFixture<NewsWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsWrapperComponent]
    });
    fixture = TestBed.createComponent(NewsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

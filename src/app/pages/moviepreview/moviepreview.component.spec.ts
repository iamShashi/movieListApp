import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviepreviewComponent } from './moviepreview.component';

describe('MoviepreviewComponent', () => {
  let component: MoviepreviewComponent;
  let fixture: ComponentFixture<MoviepreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

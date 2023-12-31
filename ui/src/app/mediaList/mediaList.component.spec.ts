import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaListComponent } from './mediaList.component';

describe('MoviesComponent', () => {
  let component: MediaListComponent;
  let fixture: ComponentFixture<MediaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaListComponent],
    });
    fixture = TestBed.createComponent(MediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

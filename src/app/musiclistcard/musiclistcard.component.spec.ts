import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiclistcardComponent } from './musiclistcard.component';

describe('MusiclistcardComponent', () => {
  let component: MusiclistcardComponent;
  let fixture: ComponentFixture<MusiclistcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusiclistcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiclistcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

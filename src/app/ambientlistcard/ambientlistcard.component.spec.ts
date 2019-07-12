import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientlistcardComponent } from './ambientlistcard.component';

describe('AmbientlistcardComponent', () => {
  let component: AmbientlistcardComponent;
  let fixture: ComponentFixture<AmbientlistcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbientlistcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientlistcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

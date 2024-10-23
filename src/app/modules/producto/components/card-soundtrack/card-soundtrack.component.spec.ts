import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSoundtrackComponent } from './card-soundtrack.component';

describe('CardSoundtrackComponent', () => {
  let component: CardSoundtrackComponent;
  let fixture: ComponentFixture<CardSoundtrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSoundtrackComponent]
    });
    fixture = TestBed.createComponent(CardSoundtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

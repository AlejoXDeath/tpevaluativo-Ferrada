import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsworkshopComponent } from './modsworkshop.component';

describe('ModsworkshopComponent', () => {
  let component: ModsworkshopComponent;
  let fixture: ComponentFixture<ModsworkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModsworkshopComponent]
    });
    fixture = TestBed.createComponent(ModsworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

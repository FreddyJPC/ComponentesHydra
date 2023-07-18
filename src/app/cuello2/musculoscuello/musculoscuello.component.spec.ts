import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusculoscuelloComponent } from './musculoscuello.component';

describe('MusculoscuelloComponent', () => {
  let component: MusculoscuelloComponent;
  let fixture: ComponentFixture<MusculoscuelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusculoscuelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusculoscuelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

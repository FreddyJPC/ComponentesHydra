import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ojos3Component } from './ojos3.component';

describe('Ojos3Component', () => {
  let component: Ojos3Component;
  let fixture: ComponentFixture<Ojos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ojos3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ojos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

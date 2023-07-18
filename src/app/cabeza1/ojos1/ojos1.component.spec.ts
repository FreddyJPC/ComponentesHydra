import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ojos1Component } from './ojos1.component';

describe('Ojos1Component', () => {
  let component: Ojos1Component;
  let fixture: ComponentFixture<Ojos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ojos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ojos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuello3Component } from './cuello3.component';

describe('Cuello3Component', () => {
  let component: Cuello3Component;
  let fixture: ComponentFixture<Cuello3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuello3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuello3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabeza1Component } from './cabeza1.component';

describe('Cabeza1Component', () => {
  let component: Cabeza1Component;
  let fixture: ComponentFixture<Cabeza1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cabeza1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabeza1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

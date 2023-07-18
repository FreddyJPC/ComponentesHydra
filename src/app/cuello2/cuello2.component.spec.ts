import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuello2Component } from './cuello2.component';

describe('Cuello2Component', () => {
  let component: Cuello2Component;
  let fixture: ComponentFixture<Cuello2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuello2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuello2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

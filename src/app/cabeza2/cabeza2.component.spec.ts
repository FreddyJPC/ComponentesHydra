import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabeza2Component } from './cabeza2.component';

describe('Cabeza2Component', () => {
  let component: Cabeza2Component;
  let fixture: ComponentFixture<Cabeza2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cabeza2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabeza2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

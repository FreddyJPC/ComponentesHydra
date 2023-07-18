import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boca2Component } from './boca2.component';

describe('Boca2Component', () => {
  let component: Boca2Component;
  let fixture: ComponentFixture<Boca2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boca2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boca2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

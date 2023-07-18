import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boca3Component } from './boca3.component';

describe('Boca3Component', () => {
  let component: Boca3Component;
  let fixture: ComponentFixture<Boca3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boca3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boca3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

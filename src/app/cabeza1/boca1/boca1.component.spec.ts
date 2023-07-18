import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boca1Component } from './boca1.component';

describe('Boca1Component', () => {
  let component: Boca1Component;
  let fixture: ComponentFixture<Boca1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boca1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boca1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

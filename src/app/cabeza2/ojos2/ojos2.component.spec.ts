import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ojos2Component } from './ojos2.component';

describe('Ojos2Component', () => {
  let component: Ojos2Component;
  let fixture: ComponentFixture<Ojos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ojos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ojos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

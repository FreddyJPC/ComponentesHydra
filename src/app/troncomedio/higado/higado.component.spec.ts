import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigadoComponent } from './higado.component';

describe('HigadoComponent', () => {
  let component: HigadoComponent;
  let fixture: ComponentFixture<HigadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HigadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

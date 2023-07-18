import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsofagoComponent } from './esofago.component';

describe('EsofagoComponent', () => {
  let component: EsofagoComponent;
  let fixture: ComponentFixture<EsofagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsofagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsofagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

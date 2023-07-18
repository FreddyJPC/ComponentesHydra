import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstomagoComponent } from './estomago.component';

describe('EstomagoComponent', () => {
  let component: EstomagoComponent;
  let fixture: ComponentFixture<EstomagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstomagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstomagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

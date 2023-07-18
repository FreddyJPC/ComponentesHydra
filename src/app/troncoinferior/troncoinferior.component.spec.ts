import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncoinferiorComponent } from './troncoinferior.component';

describe('TroncoinferiorComponent', () => {
  let component: TroncoinferiorComponent;
  let fixture: ComponentFixture<TroncoinferiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroncoinferiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroncoinferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

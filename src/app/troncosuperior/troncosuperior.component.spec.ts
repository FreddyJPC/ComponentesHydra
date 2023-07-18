import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncosuperiorComponent } from './troncosuperior.component';

describe('TroncosuperiorComponent', () => {
  let component: TroncosuperiorComponent;
  let fixture: ComponentFixture<TroncosuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroncosuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroncosuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

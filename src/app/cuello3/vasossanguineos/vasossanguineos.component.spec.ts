import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasossanguineosComponent } from './vasossanguineos.component';

describe('VasossanguineosComponent', () => {
  let component: VasossanguineosComponent;
  let fixture: ComponentFixture<VasossanguineosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VasossanguineosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VasossanguineosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

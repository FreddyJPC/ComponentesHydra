import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinonesComponent } from './rinones.component';

describe('RinonesComponent', () => {
  let component: RinonesComponent;
  let fixture: ComponentFixture<RinonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RinonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RinonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

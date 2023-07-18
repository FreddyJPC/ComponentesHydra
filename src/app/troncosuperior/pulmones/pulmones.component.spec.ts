import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulmonesComponent } from './pulmones.component';

describe('PulmonesComponent', () => {
  let component: PulmonesComponent;
  let fixture: ComponentFixture<PulmonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulmonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulmonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

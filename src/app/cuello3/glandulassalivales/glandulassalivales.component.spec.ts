import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlandulassalivalesComponent } from './glandulassalivales.component';

describe('GlandulassalivalesComponent', () => {
  let component: GlandulassalivalesComponent;
  let fixture: ComponentFixture<GlandulassalivalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlandulassalivalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlandulassalivalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

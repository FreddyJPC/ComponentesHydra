import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangliosComponent } from './ganglios.component';

describe('GangliosComponent', () => {
  let component: GangliosComponent;
  let fixture: ComponentFixture<GangliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GangliosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GangliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraqueaComponent } from './traquea.component';

describe('TraqueaComponent', () => {
  let component: TraqueaComponent;
  let fixture: ComponentFixture<TraqueaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraqueaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraqueaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncomedioComponent } from './troncomedio.component';

describe('TroncomedioComponent', () => {
  let component: TroncomedioComponent;
  let fixture: ComponentFixture<TroncomedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroncomedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroncomedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

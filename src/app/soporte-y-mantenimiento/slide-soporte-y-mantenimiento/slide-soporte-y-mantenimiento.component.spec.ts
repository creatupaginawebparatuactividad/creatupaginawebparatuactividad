import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSoporteYMantenimientoComponent } from './slide-soporte-y-mantenimiento.component';

describe('SlideSoporteYMantenimientoComponent', () => {
  let component: SlideSoporteYMantenimientoComponent;
  let fixture: ComponentFixture<SlideSoporteYMantenimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideSoporteYMantenimientoComponent]
    });
    fixture = TestBed.createComponent(SlideSoporteYMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

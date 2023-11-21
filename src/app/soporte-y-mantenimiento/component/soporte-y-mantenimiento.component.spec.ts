import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteYMantenimientoComponent } from './soporte-y-mantenimiento.component';

describe('SoporteYMantenimientoComponent', () => {
  let component: SoporteYMantenimientoComponent;
  let fixture: ComponentFixture<SoporteYMantenimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoporteYMantenimientoComponent]
    });
    fixture = TestBed.createComponent(SoporteYMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

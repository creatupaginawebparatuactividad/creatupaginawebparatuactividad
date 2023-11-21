import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominioPersonalizadoComponent } from './dominio-personalizado.component';

describe('DominioPersonalizadoComponent', () => {
  let component: DominioPersonalizadoComponent;
  let fixture: ComponentFixture<DominioPersonalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DominioPersonalizadoComponent]
    });
    fixture = TestBed.createComponent(DominioPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

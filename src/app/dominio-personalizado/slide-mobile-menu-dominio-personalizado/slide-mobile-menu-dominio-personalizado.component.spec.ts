import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMobileMenuDominioPersonalizadoComponent } from './slide-mobile-menu-dominio-personalizado.component';

describe('SlideMobileMenuDominioPersonalizadoComponent', () => {
  let component: SlideMobileMenuDominioPersonalizadoComponent;
  let fixture: ComponentFixture<SlideMobileMenuDominioPersonalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideMobileMenuDominioPersonalizadoComponent]
    });
    fixture = TestBed.createComponent(SlideMobileMenuDominioPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

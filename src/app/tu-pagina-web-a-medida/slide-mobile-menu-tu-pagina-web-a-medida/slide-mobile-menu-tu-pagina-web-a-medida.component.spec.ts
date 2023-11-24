import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMobileMenuTuPaginaWebAMedidaComponent } from './slide-mobile-menu-tu-pagina-web-a-medida.component';

describe('SlideMobileMenuTuPaginaWebAMedidaComponent', () => {
  let component: SlideMobileMenuTuPaginaWebAMedidaComponent;
  let fixture: ComponentFixture<SlideMobileMenuTuPaginaWebAMedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideMobileMenuTuPaginaWebAMedidaComponent]
    });
    fixture = TestBed.createComponent(SlideMobileMenuTuPaginaWebAMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

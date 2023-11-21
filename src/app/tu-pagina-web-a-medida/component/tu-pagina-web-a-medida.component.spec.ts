import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuPaginaWebAMedidaComponent } from './tu-pagina-web-a-medida.component';

describe('TuPaginaWebAMedidaComponent', () => {
  let component: TuPaginaWebAMedidaComponent;
  let fixture: ComponentFixture<TuPaginaWebAMedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuPaginaWebAMedidaComponent]
    });
    fixture = TestBed.createComponent(TuPaginaWebAMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

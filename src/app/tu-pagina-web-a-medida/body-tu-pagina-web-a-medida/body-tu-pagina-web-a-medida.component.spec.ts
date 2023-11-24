import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTuPaginaWebAMedidaComponent } from './body-tu-pagina-web-a-medida.component';

describe('BodyTuPaginaWebAMedidaComponent', () => {
  let component: BodyTuPaginaWebAMedidaComponent;
  let fixture: ComponentFixture<BodyTuPaginaWebAMedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyTuPaginaWebAMedidaComponent]
    });
    fixture = TestBed.createComponent(BodyTuPaginaWebAMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDominioPersonalizadoComponent } from './body-dominio-personalizado.component';

describe('BodyDominioPersonalizadoComponent', () => {
  let component: BodyDominioPersonalizadoComponent;
  let fixture: ComponentFixture<BodyDominioPersonalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyDominioPersonalizadoComponent]
    });
    fixture = TestBed.createComponent(BodyDominioPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySeoPosicionamosTuWebComponent } from './body-seo-posicionamos-tu-web.component';

describe('BodySeoPosicionamosTuWebComponent', () => {
  let component: BodySeoPosicionamosTuWebComponent;
  let fixture: ComponentFixture<BodySeoPosicionamosTuWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodySeoPosicionamosTuWebComponent]
    });
    fixture = TestBed.createComponent(BodySeoPosicionamosTuWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

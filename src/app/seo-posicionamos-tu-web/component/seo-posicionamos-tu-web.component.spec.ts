import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoPosicionamosTuWebComponent } from './seo-posicionamos-tu-web.component';

describe('SeoPosicionamosTuWebComponent', () => {
  let component: SeoPosicionamosTuWebComponent;
  let fixture: ComponentFixture<SeoPosicionamosTuWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeoPosicionamosTuWebComponent]
    });
    fixture = TestBed.createComponent(SeoPosicionamosTuWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

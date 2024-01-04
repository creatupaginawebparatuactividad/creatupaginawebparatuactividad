import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMobileMenuSeoPosicionamosTuWebComponent } from './slide-mobile-menu-seo-posicionamos-tu-web.component';

describe('SlideMobileMenuSeoPosicionamosTuWebComponent', () => {
  let component: SlideMobileMenuSeoPosicionamosTuWebComponent;
  let fixture: ComponentFixture<SlideMobileMenuSeoPosicionamosTuWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideMobileMenuSeoPosicionamosTuWebComponent]
    });
    fixture = TestBed.createComponent(SlideMobileMenuSeoPosicionamosTuWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

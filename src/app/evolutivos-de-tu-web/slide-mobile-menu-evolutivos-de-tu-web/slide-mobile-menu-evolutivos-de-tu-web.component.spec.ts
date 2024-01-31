import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMobileMenuEvolutivosDeTuWebComponent } from './slide-mobile-menu-evolutivos-de-tu-web.component';

describe('SlideMobileMenuEvolutivosDeTuWebComponent', () => {
  let component: SlideMobileMenuEvolutivosDeTuWebComponent;
  let fixture: ComponentFixture<SlideMobileMenuEvolutivosDeTuWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideMobileMenuEvolutivosDeTuWebComponent]
    });
    fixture = TestBed.createComponent(SlideMobileMenuEvolutivosDeTuWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

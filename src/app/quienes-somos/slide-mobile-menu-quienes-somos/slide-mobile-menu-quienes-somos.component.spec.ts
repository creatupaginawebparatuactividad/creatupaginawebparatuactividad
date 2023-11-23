import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMobileMenuQuienesSomosComponent } from './slide-mobile-menu-quienes-somos.component';

describe('SlideMobileMenuQuienesSomosComponent', () => {
  let component: SlideMobileMenuQuienesSomosComponent;
  let fixture: ComponentFixture<SlideMobileMenuQuienesSomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideMobileMenuQuienesSomosComponent]
    });
    fixture = TestBed.createComponent(SlideMobileMenuQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

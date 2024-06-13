import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMobileMenuPortafolioComponent } from './slide-mobile-menu-portafolio.component';

describe('SlideMobileMenuPortafolioComponent', () => {
  let component: SlideMobileMenuPortafolioComponent;
  let fixture: ComponentFixture<SlideMobileMenuPortafolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideMobileMenuPortafolioComponent]
    });
    fixture = TestBed.createComponent(SlideMobileMenuPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

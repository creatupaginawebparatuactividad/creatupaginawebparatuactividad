import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMobileMenuComponent } from './slide-mobile-menu.component';

describe('SlideMobileMenuComponent', () => {
  let component: SlideMobileMenuComponent;
  let fixture: ComponentFixture<SlideMobileMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideMobileMenuComponent]
    });
    fixture = TestBed.createComponent(SlideMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

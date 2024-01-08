import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBodyHeaderComponent } from './desktop-body-header.component';

describe('DesktopBodyHeaderComponent', () => {
  let component: DesktopBodyHeaderComponent;
  let fixture: ComponentFixture<DesktopBodyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopBodyHeaderComponent]
    });
    fixture = TestBed.createComponent(DesktopBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

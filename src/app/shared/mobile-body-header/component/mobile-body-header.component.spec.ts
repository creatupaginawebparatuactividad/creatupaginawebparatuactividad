import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBodyHeaderComponent } from './mobile-body-header.component';

describe('MobileBodyHeaderComponent', () => {
  let component: MobileBodyHeaderComponent;
  let fixture: ComponentFixture<MobileBodyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBodyHeaderComponent]
    });
    fixture = TestBed.createComponent(MobileBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

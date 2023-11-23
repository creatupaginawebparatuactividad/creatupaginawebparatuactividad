import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyQuienesSomosComponent } from './body-quienes-somos.component';

describe('BodyQuienesSomosComponent', () => {
  let component: BodyQuienesSomosComponent;
  let fixture: ComponentFixture<BodyQuienesSomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyQuienesSomosComponent]
    });
    fixture = TestBed.createComponent(BodyQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

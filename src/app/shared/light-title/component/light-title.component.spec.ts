import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightTitleComponent } from './light-title.component';

describe('LightTitleComponent', () => {
  let component: LightTitleComponent;
  let fixture: ComponentFixture<LightTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightTitleComponent]
    });
    fixture = TestBed.createComponent(LightTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

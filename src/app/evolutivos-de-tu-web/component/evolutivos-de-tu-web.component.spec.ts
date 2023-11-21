import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutivosDeTuWebComponent } from './evolutivos-de-tu-web.component';

describe('EvolutivosDeTuWebComponent', () => {
  let component: EvolutivosDeTuWebComponent;
  let fixture: ComponentFixture<EvolutivosDeTuWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvolutivosDeTuWebComponent]
    });
    fixture = TestBed.createComponent(EvolutivosDeTuWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

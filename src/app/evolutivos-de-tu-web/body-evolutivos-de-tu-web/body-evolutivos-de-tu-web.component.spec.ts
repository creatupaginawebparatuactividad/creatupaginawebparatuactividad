import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEvolutivosDeTuWebComponent } from './body-evolutivos-de-tu-web.component';

describe('BodyEvolutivosDeTuWebComponent', () => {
  let component: BodyEvolutivosDeTuWebComponent;
  let fixture: ComponentFixture<BodyEvolutivosDeTuWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyEvolutivosDeTuWebComponent]
    });
    fixture = TestBed.createComponent(BodyEvolutivosDeTuWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

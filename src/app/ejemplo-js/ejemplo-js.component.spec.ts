import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploJSComponent } from './ejemplo-js.component';

describe('EjemploJSComponent', () => {
  let component: EjemploJSComponent;
  let fixture: ComponentFixture<EjemploJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploahoraComponent } from './ejemploahora.component';

describe('EjemploahoraComponent', () => {
  let component: EjemploahoraComponent;
  let fixture: ComponentFixture<EjemploahoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploahoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploahoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

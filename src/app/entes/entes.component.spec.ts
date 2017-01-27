/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntesComponent } from './entes.component';

describe('EntesComponent', () => {
  let component: EntesComponent;
  let fixture: ComponentFixture<EntesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

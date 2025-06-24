import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablev2Component } from './tablev2.component';

describe('Tablev2Component', () => {
  let component: Tablev2Component;
  let fixture: ComponentFixture<Tablev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablev2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

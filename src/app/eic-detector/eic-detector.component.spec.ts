import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EicDetectorComponent } from './eic-detector.component';

describe('EicDetectorComponent', () => {
  let component: EicDetectorComponent;
  let fixture: ComponentFixture<EicDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EicDetectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EicDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

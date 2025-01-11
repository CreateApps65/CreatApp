import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgCalComponent } from './avg-cal.component';

describe('AvgCalComponent', () => {
  let component: AvgCalComponent;
  let fixture: ComponentFixture<AvgCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvgCalComponent]
    });
    fixture = TestBed.createComponent(AvgCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

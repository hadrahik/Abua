import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MInfoComponent } from './m-info.component';

describe('MInfoComponent', () => {
  let component: MInfoComponent;
  let fixture: ComponentFixture<MInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MInfoComponent]
    });
    fixture = TestBed.createComponent(MInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

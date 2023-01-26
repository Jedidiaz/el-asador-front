import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMComponent } from './pay-m.component';

describe('PayMComponent', () => {
  let component: PayMComponent;
  let fixture: ComponentFixture<PayMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

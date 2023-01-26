import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySureComponent } from './pay-sure.component';

describe('PaySureComponent', () => {
  let component: PaySureComponent;
  let fixture: ComponentFixture<PaySureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaySureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaySureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

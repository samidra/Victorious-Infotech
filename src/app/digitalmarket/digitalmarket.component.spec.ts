import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalmarketComponent } from './digitalmarket.component';

describe('DigitalmarketComponent', () => {
  let component: DigitalmarketComponent;
  let fixture: ComponentFixture<DigitalmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalmarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

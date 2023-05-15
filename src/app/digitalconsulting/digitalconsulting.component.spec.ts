import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalconsultingComponent } from './digitalconsulting.component';

describe('DigitalconsultingComponent', () => {
  let component: DigitalconsultingComponent;
  let fixture: ComponentFixture<DigitalconsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalconsultingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalconsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

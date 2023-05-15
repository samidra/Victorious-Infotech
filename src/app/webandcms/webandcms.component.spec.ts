import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebandcmsComponent } from './webandcms.component';

describe('WebandcmsComponent', () => {
  let component: WebandcmsComponent;
  let fixture: ComponentFixture<WebandcmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebandcmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebandcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

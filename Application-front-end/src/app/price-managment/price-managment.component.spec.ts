import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceManagmentComponent } from './price-managment.component';

describe('PriceManagmentComponent', () => {
  let component: PriceManagmentComponent;
  let fixture: ComponentFixture<PriceManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

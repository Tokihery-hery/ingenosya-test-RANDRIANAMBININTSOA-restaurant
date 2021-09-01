import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsCatalogueComponent } from './foods-catalogue.component';

describe('FoodsCatalogueComponent', () => {
  let component: FoodsCatalogueComponent;
  let fixture: ComponentFixture<FoodsCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsIngredientInfoComponent } from './foods-ingredient-info.component';

describe('FoodsIngredientInfoComponent', () => {
  let component: FoodsIngredientInfoComponent;
  let fixture: ComponentFixture<FoodsIngredientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsIngredientInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsIngredientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

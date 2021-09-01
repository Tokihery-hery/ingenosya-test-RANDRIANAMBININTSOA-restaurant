import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeIngredientNeedsComponent } from './visualize-ingredient-needs.component';

describe('VisualizeIngredientNeedsComponent', () => {
  let component: VisualizeIngredientNeedsComponent;
  let fixture: ComponentFixture<VisualizeIngredientNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeIngredientNeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeIngredientNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

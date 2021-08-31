import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsManagmentComponent } from './foods-managment.component';

describe('FoodsManagmentComponent', () => {
  let component: FoodsManagmentComponent;
  let fixture: ComponentFixture<FoodsManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

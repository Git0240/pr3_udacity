import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkMenuPage } from './drink-menu.page';

describe('DrinkMenuPage', () => {
  let component: DrinkMenuPage;
  let fixture: ComponentFixture<DrinkMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
